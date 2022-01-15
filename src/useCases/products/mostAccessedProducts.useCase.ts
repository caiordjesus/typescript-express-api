import BaseUseCase from "global/base/Base.UseCase";
import { redisClientConnect } from "../../global/config/redis_config";

export default class MostAccessedProductsUseCase extends BaseUseCase<any, any> {
    constructor(){
        super(null)
    }
    async execute() {
        const client = await redisClientConnect()
    
        const value = (await client.get('lista:10_produtos_mais_acessados')) || ''
        return value
    }
}