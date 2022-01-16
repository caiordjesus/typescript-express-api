import BaseController from "../../global/base/Base.Controller"

export default class MostAccessedProductsController extends BaseController{
    constructor(useCase: any) {
        super(useCase)
    }

    protected async executeImpl(req: HttpRequest): Promise<any> {
        const mostAccessProducts = await this.useCase.execute()

        return this.responseSuccess.ok(JSON.parse(mostAccessProducts))
    }
}