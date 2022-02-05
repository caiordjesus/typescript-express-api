import BaseController from "../../../global/base/Base.Controller"

export default class SignupController extends BaseController{
    constructor(useCase: any) {
        super(useCase)
    }

    protected executeImpl(req: HttpRequest): Promise<any> {
        return this.responseSuccess.ok({token: "heuheuheuhue-1"})
    }
}