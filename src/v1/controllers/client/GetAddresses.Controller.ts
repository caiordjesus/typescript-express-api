import { prisma, PrismaClient } from "@prisma/client"
import BaseController from "../../../global/base/Base.Controller"

export default class GetAdressesController extends BaseController{
    constructor(useCase: any) {
        super(useCase)
    }

    protected async executeImpl(req: HttpRequest): Promise<any> {
        const idCliente = req.params.id_cliente

        const client = new PrismaClient()
        
        const enderecos = await client.endereco.findMany({
            where: {
                cliente: {
                    id: idCliente
                }
            }
        })

        return this.responseSuccess.ok(enderecos)
    }
}