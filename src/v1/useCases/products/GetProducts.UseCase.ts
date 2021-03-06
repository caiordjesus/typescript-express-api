import BaseUseCase from "../../../global/base/Base.UseCase";
import ProductRepository from "../../../repositories/product.Repository";

export default class ProductsUseCase extends BaseUseCase<any, any> {
    constructor(){
        super(null)
    }
    async execute(redisClient: any) {
        const cache = await redisClient.get('produtos_disponiveis')
        console.log(cache)
        if (cache) {
            console.log('FROM REDIS')
            return JSON.parse(cache)
        }

        const productRepository = new ProductRepository()
        const produtos = await productRepository.find()
        redisClient.set('produtos_disponiveis', JSON.stringify(produtos), {
            EX:  5 * 60 //5 minutes
        })
        console.log('FROM POSTGRES')
        return produtos
    }
}