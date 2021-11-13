/* NOT IMPLEMENTED ON PROJECT */
import User from "./User";
import BaseService from "./Base.Service";

export default abstract class BaseUseCase<IRequest, IResponse> {
    service: BaseService

    constructor(service: BaseService) {
        this.service = service
    }

    injectProfile(user: User) {
        this.service.injectProfile(user)
    }

    abstract execute (request?: IRequest, callback?: Function) : Promise<IResponse> | IResponse;
}
