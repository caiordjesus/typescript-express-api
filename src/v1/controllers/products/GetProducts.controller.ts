import BaseController from "../../../global/base/Base.Controller"

export default class ProductsController extends BaseController{
    constructor(useCase: any) {
        super(useCase)
    }

    protected async executeImpl(req: HttpRequest): Promise<any> {
        const redisClient = req.app.locals.redisClient
        const products = await this.useCase.execute(redisClient)

        return this.responseSuccess.ok(products)
    }
}