import { Request, Response } from 'express'
import { BaseApiResponse } from '../base/Base.ApiResponseHandler'
import BaseController from '../base/Base.Controller'


const controllerHandler = (controller: BaseController) => {
    return async (req: Request, res: Response): Promise<Response|void> => {
        const httpRequest: HttpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            profile: req.profile,
            ip: req.ip,
            method: req.method,
            path: req.path,
            headers: req.headers,
            app: req.app
        }

        const response: BaseApiResponse = await controller.execute(httpRequest)

        return res.status(response.getStatusCode()).json({
            details: response.getDetails(),
            data: response.getData()
        })
    }
}

export default controllerHandler