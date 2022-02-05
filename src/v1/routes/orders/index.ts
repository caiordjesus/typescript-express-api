import { getOrdersController } from '../../controllers/orders'
import { Router } from 'express'
import controllerHandler from '../../../global/handlers/controllerHandler'
import { PrismaClient } from "@prisma/client";


const router = Router()

router.get('/', controllerHandler(getOrdersController))

router.get('/:codigo', async (req, res) => {
    const client = new PrismaClient()

    const codigo = parseInt(req.params.codigo) || 0

    const pedido = await client.pedido.findUnique({
        where: {
            id: codigo
        }
    })

    const itens = await client.item.findMany({
        where: {
            fk_pedido_id: codigo
        },
        include: {
            produto: true
        }
    })
    
    client.$disconnect()
    
    const orderItems = []
    for (let _item of itens) {
        const unitPrice = _item.preco_unitario?.toNumber() || 0
        const qtd = _item.quantidade?.toNumber() || 0
        orderItems.push({
            item: _item.produto?.nome,
            qtd: qtd,
            totalValue: unitPrice * qtd
        })
    }

    res.json({
        order: pedido,
        details: orderItems
    })
})

export default router