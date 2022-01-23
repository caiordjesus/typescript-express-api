import BaseController from "../../../global/base/Base.Controller"

export default class GetOrdersController extends BaseController{
    constructor(useCase: any) {
        super(useCase)
    }

    protected async executeImpl(req: HttpRequest): Promise<any> {
        // const products = await this.useCase.execute()

        return this.responseSuccess.ok({
            pedidos: [
                {
                    code: '1sd65fa',
                    date: new Date('2022-01-02 15:00:00'),
                    status: 'Entregue',
                    price: 15.94,
                },
                {
                    code: 'a65sfa',
                    date: new Date('2022-01-03 17:00:00'),
                    status: 'Pendente',
                    price: 15.94,
                }
            ]
        })
    }
}