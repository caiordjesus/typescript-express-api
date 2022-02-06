import { getAdressesController, getSubscribesController } from '../../controllers/client'
import { Router } from 'express'
import controllerHandler from '../../../global/handlers/controllerHandler'
import { PrismaClient } from "@prisma/client";

const router = Router({mergeParams: true})

router.get('/enderecos', controllerHandler(getAdressesController))
router.get('/assinaturas', controllerHandler(getSubscribesController))

router.get('/pedidos', async (req, res) => {
    const params: any =  req.params
    const codigo = parseInt(params.id_cliente)

    const redisClient = req.app.locals.redisClient

    const cache = await fetchOnCache(redisClient, codigo)
    if (cache) {
        console.log('RETURN FROM REDIS')
        return res.json({pedidos: cache})
    }

    const orders = await fetchOnDatabase(codigo)

    const pedidos = orders.map((order) => {
        return {
            code: order.id,
            status: fromIntegerToStatus(order.status),
            date: order.datahora,
        }
    })

    setOnCache(redisClient, codigo, pedidos)
    console.log('RETURNING FROM POSTGRES')
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

async function fetchOnCache (redisClient: any, clientId: number) {
    const cache = await redisClient.get(buildOrdersKeyToClient(clientId))
    if (cache) {
        return JSON.parse(cache)
    }
}

async function setOnCache (redisClient: any, clientId: number, pedidos: any) {
    const key = buildOrdersKeyToClient(clientId)
    redisClient.set(key, JSON.stringify(pedidos), {
        EX:  24 * 60 * 60 //24 hours
    })
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