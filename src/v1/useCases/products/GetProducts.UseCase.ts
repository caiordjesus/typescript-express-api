import { redisClientConnect } from "global/config/redis_config";
import BaseUseCase from "../../../global/base/Base.UseCase";
import ProductRepository from "../../../repositories/product.Repository";

export default class ProductsUseCase extends BaseUseCase<any, any> {
    constructor(){
        super(null)
    }
    async execute() {
        const redis = await redisClientConnect()
        const cache = await redis.get('produtos')
        if (cache) {
            console.log('FROM REDIS')
            redis.disconnect()
            return JSON.parse(cache)
        }

        const productRepository = new ProductRepository()
        const produtos = await productRepository.find()
        redis.set('produtos', JSON.stringify(produtos), {
            EX:  24 * 60 * 60 //24 hours
        })
        console.log('FROM POSTGRES')
        return produtos
    }
}