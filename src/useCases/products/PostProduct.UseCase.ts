import BaseUseCase from "../../global/base/Base.UseCase";
import { Product } from "../../entities/product.Entity";

export default class PostProductUseCase extends BaseUseCase<any, any> {
    constructor(){
        super(null)
    }
    async execute(dto: IProduct) {
        const product = new Product(dto)
        console.log('passando por aqui com', dto)
        try {
            product.save()
            return true
        } catch (error) {
            return error
        }
    }
}