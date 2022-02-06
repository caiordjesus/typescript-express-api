import prisma from '../../../global/config/prisma_config'
import BaseController from "../../../global/base/Base.Controller"

export default class GetPersonalizationsController extends BaseController{
    constructor(useCase: any) {
        super(useCase)
    }

    protected async executeImpl(req: HttpRequest): Promise<any> {
        
        const client = prisma

        const personalizations = await client.personalizacao.findMany()

        client.$disconnect()

        return this.responseSuccess.ok(personalizations)
    }
}