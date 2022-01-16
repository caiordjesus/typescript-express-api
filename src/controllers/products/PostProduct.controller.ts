import BaseController from "../../global/base/Base.Controller"

export default class PostProductController extends BaseController{
    constructor(useCase: any) {
        super(useCase)
    }

    protected async executeImpl(req: HttpRequest): Promise<any> {
        const dto: IProduct = {
            metric: 'un',
            name: 'batata',
            unitaryPrice: 5.20
        }
        const products = await this.useCase.execute(dto)

        return this.responseSuccess.ok(products)
    }
}