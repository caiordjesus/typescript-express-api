import BaseUseCase from "global/base/Base.UseCase";
import ProductRepository from "repositories/product.Repository";

export default class ProductsUseCase extends BaseUseCase<any, any> {
    constructor(){
        super(null)
    }
    async execute() {
        const productRepository = new ProductRepository()
        return await productRepository.find()
    }
}