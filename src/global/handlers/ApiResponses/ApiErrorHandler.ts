import { BaseApiResponse } from "global/base/Base.ApiResponseHandler"


interface IApiError {
    getdetails(): string
    getStatusCode(): number
}

export class ApiError extends BaseApiResponse implements IApiError {
    constructor() {
        super({ 
            data: null, 
            details: 'Error.', 
            statusCode: 500 
        })
    }

    getdetails(): string {
        return this.details
    }

    getStatusCode(): number {
        return this.statusCode
    }

    setMessage(message: string) {
        this.details = message
    }
    
    /* -------------------------------------------------------------------------- */
    /*                               4XX: Client Error                            */
    /* -------------------------------------------------------------------------- */
    setBadRequest(){
        this.statusCode = 400
        this.details = 'Bad request from client.'
    }

    setNotFound(){
        this.statusCode = 404
        this.details = 'The server could not find the content.'
    }

    setForbidden(){
        this.statusCode = 403
        this.details = "The client doesn't have access to the document."
    }

    setImATeapot(){
        this.statusCode = 418
        this.details = `O servidor recusa a tentativa de coar café num bule de chá.`
    }

    setUnprocessableEntity(){
        this.statusCode = 422
        this.details = `Could not process the request`
    }
}