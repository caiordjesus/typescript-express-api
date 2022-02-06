import prisma from '../../../global/config/prisma_config'
import BaseController from "../../../global/base/Base.Controller"

export default class GetSubscribesController extends BaseController{
    constructor(useCase: any) {
        super(useCase)
    }

    protected async executeImpl(req: HttpRequest): Promise<any> {
        const idCliente = parseInt(req.params.id_cliente)

        const client = prisma
        
        const recorrencias = await client.recorrencia_pedido.findMany({
            where: {
                pedido: {
                    fk_cliente_id: idCliente
                }
            },
            include: {
                recorrencia: true
            }
        })
        client.$disconnect()

        return this.responseSuccess.ok(recorrencias)
    }
}