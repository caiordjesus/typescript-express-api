import { getAdressesController } from '../../controllers/client'
import { Router } from 'express'
import controllerHandler from '../../../global/handlers/controllerHandler'
import { PrismaClient } from "@prisma/client";

const router = Router({mergeParams: true})

router.get('/enderecos', controllerHandler(getAdressesController))

router.get('/pedidos', async (req, res) => {
    const params: any =  req.params
    const codigo = parseInt(params.id_cliente)

    const client = new PrismaClient()

    const orders = await client.pedido.findMany({
        where: {
            fk_cliente_id: codigo

        }
    })
    client.$disconnect()
    const pedidos = orders.map((order) => {
        return {
            code: order.id,
            status: fromIntegerToStatus(order.status),
            date: order.datahora,
        }
    })

    res.json({
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

export default router