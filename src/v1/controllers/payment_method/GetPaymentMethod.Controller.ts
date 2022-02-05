import { PrismaClient } from "@prisma/client"
import BaseController from "../../../global/base/Base.Controller"

export default class GetPaymentMethodController extends BaseController{
    constructor(useCase: any) {
        super(useCase)
    }

    protected async executeImpl(req: HttpRequest): Promise<any> {

        const client = new PrismaClient()
        
        const formasPagamento = await client.forma_pagamento.findMany()

        return this.responseSuccess.ok(formasPagamento)
    }
}