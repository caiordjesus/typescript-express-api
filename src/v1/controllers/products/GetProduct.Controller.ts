import ProductRepository from "repositories/product.Repository"
import BaseController from "../../../global/base/Base.Controller"

export default class GetProductController extends BaseController{
    constructor(useCase: any) {
        super(useCase)
    }

    protected async executeImpl(req: HttpRequest): Promise<any> {
        const idProduto = req.params.id_produto

        const productRepository = new ProductRepository()

        const produto = await productRepository.findOne(idProduto)

        return this.responseSuccess.ok(produto)
    }
}