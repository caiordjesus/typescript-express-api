import { getAdressesController, getSubscribesController } from '../../controllers/client'
import { Router } from 'express'
import controllerHandler from '../../../global/handlers/controllerHandler'
import { PrismaClient } from "@prisma/client";
import { redisClientConnect } from 'global/config/redis_config';

const router = Router({mergeParams: true})

router.get('/enderecos', controllerHandler(getAdressesController))
router.get('/assinaturas', controllerHandler(getSubscribesController))

router.get('/pedidos', async (req, res) => {
    const params: any =  req.params
    const codigo = parseInt(params.id_cliente)

    const cache = await fetchOnCache(codigo)
    if (cache) {
        return res.json({cache})
    }

    const orders = await fetchOnDatabase(codigo)

    const pedidos = orders.map((order) => {
        return {
            code: order.id,
            status: fromIntegerToStatus(order.status),
            date: order.datahora,
        }
    })

    setOnCache(codigo, pedidos)

    return res.json({
        pedidos,
    })
})

function fromIntegerToStatus (status_code: number | null){
    switch (status_code) {
        case 0:
            return 'Pendente'
        case 1:
            return 'Entregue'
        default:
            return 'Pendente'
    }
}

function buildOrdersKeyToClient (clientId: number) {
    return `orders:${clientId}:list`
}

async function fetchOnCache (clientId: number) {
    const redisclient = await redisClientConnect()
    const cache = await redisclient.get(buildOrdersKeyToClient(clientId))
    if (cache) {
        redisclient.disconnect()
        return JSON.parse(cache)
    }
}

async function setOnCache (clientId: number, pedidos: any) {
    const redisclient = await redisClientConnect()
    const key = buildOrdersKeyToClient(clientId)
    redisclient.set(key, JSON.stringify(pedidos), {
        EX:  24 * 60 * 60 //24 hours
    })
    redisclient.disconnect()
}

async function fetchOnDatabase(codigo: any) {
    const client = new PrismaClient()
    const orders = await client.pedido.findMany({
        where: {
            fk_cliente_id: codigo

        }
    })
    client.$disconnect()
    return orders
}
export default router