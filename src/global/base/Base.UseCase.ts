/* NOT IMPLEMENTED ON PROJECT */
import BaseService from "./Base.Service";

export default abstract class BaseUseCase<IRequest, IResponse> {
    service: BaseService | null

    constructor(service: null | BaseService) {
        this.service = service
    }

    abstract execute (request?: IRequest, callback?: Function) : Promise<IResponse> | IResponse;
}
