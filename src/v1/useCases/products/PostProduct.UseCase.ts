import BaseUseCase from "../../../global/base/Base.UseCase";

export default class PostProductUseCase extends BaseUseCase<any, any> {
    constructor(){
        super(null)
    }
    async execute(dto: IProduct) {
        return true
    }
}