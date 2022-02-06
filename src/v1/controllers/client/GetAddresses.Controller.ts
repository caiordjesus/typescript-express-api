import prisma from '../../../global/config/prisma_config'
import BaseController from "../../../global/base/Base.Controller"

export default class GetAdressesController extends BaseController{
    constructor(useCase: any) {
        super(useCase)
    }

    protected async executeImpl(req: HttpRequest): Promise<any> {
        const idCliente = parseInt(req.params.id_cliente)

        const client = prisma
        
        const enderecos = await client.endereco.findMany({
            where: {
                fk_cliente_id: idCliente
            }
        })
        client.$disconnect()

        return this.responseSuccess.ok(enderecos)
    }
}