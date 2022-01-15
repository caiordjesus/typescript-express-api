import { ApiError, ApiSuccess } from '../handlers/ApiResponses'
import { BaseApiResponse } from './Base.ApiResponseHandler'
import BaseUseCase from "./Base.UseCase";
import User from "./User";

export default abstract class BaseController {

    useCase!: BaseUseCase<any, any>

    constructor(useCase: BaseUseCase<any, any>) {
        this.useCase = useCase
    }

    protected abstract executeImpl (req: HttpRequest): Promise<void | any>

    private injectProfile(profile: any) {
        this.useCase.injectProfile(new User(profile))
    }

    public async execute (req: HttpRequest): Promise<void | any> {
        try {
            // if (req.profile) this.injectProfile(req.profile)
            const response: BaseApiResponse = await this.executeImpl(req)
            return response
        } catch (err: any) {
            console.log(`[BaseController]: Uncaught controller error`)
            console.log(err)
            return this.responseServerError.fail(err)
        }
    }

    private static apiResponse(response: any) {
        return response
    }

    // 2XX: Success
    protected readonly responseSuccess = {
        ok<T> (dto?: T) {
            if (!!dto) {
                const resp: ApiSuccess = new ApiSuccess(dto)
                return BaseController.apiResponse(resp)
            } else {
                const resp: ApiSuccess = new ApiSuccess()
                return BaseController.apiResponse(resp)
            }
        },
        
        created () {
            const resp = new ApiSuccess()
            resp.setCreated()
            return BaseController.apiResponse(resp)
        },

        noContent(){
            const resp = new ApiSuccess()
            resp.setNoContent()
            return BaseController.apiResponse(resp)
        }
    }

    // 4XX: Client Error
    protected readonly responseClientError = {
        badRequest(){
            const resp = new ApiError()
            resp.setBadRequest()
            return BaseController.apiResponse(resp)
        },
    
        forbidden(){
            const resp = new ApiError()
            resp.setForbidden()
            return BaseController.apiResponse(resp)
        },

        notFound(){
            const resp = new ApiError()
            resp.setNotFound()
            return BaseController.apiResponse(resp)
        },
    
        imATeapot(){
            const resp = new ApiError()
            resp.setImATeapot()
            return BaseController.apiResponse(resp)
        },
    
        unprocessableEntity(){
            const resp = new ApiError()
            resp.setUnprocessableEntity()
            return BaseController.apiResponse(resp)
        },
    
    }

    // 5XX: Server Error
    protected readonly responseServerError = {
        fail (error: Error) {
            const resp = new ApiError()
            resp.setMessage(error.message || 'Error.')
            return BaseController.apiResponse(resp)
        }
    }
}