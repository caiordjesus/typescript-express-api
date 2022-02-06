import { PrismaClient } from "@prisma/client"
import BaseController from "../../../global/base/Base.Controller"

export default class GetOrdersController extends BaseController{
    constructor(useCase: any) {
        super(useCase)
    }

    protected async executeImpl(req: HttpRequest): Promise<any> {

        console.log(req.body)
        const order = {
            clientId: req.body.clientId,
            formaPagamentoId: req.body.formaPagamentoId,
            frete: req.body.frete,
            observacao: req.body.observacao,
            preco_total: req.body.preco_total,
            itens: req.body.item
        }

        const client = new PrismaClient()

        const pedido = await client.pedido.create({
            data: {
                fk_cliente_id: order.clientId,
                datahora: new Date(),
                fk_forma_pagamento_id: order.formaPagamentoId,
                frete: order.frete,
                observacao: order.observacao,
                preco_total: order.preco_total,
                status: 0,
                tipopedido: 'Entrega'
            }
        })

        for (const item of order.itens) {
            const itemPersistido = await client.item.create({
                data: {
                    fk_pedido_id: pedido.id,
                    fk_produto_id: item.produtoId,
                    quantidade: item.qtd,
                    preco_unitario: item.preco_unitario
                }
            })

            for(const personalizacao of item.item_personalizacao) {
                await client.item_personalizacao.create({
                    data: {
                        fk_item_id: itemPersistido.id,
                        fk_produto_personalizacao_id: personalizacao.personalizacaoId
                    }
                })
            }
        }   

        client.$disconnect()

        return this.responseSuccess.ok()
    }
}