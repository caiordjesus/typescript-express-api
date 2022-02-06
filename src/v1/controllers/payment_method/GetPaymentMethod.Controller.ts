import prisma from '../../../global/config/prisma_config'
import BaseController from "../../../global/base/Base.Controller"

export default class GetPaymentMethodController extends BaseController{
    constructor(useCase: any) {
        super(useCase)
    }

    protected async executeImpl(req: HttpRequest): Promise<any> {

        const client = prisma
        
        const formasPagamento = await client.forma_pagamento.findMany()

        client.$disconnect()

        return this.responseSuccess.ok(formasPagamento)
    }
}