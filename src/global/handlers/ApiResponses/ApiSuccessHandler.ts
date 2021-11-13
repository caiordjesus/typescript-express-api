import { BaseApiResponse } from '@global/base/Base.ApiResponseHandler'

export class ApiSuccess extends BaseApiResponse {
    constructor(data?: any) {
        super({ 
            data: data || {},
            details: 'Success.', 
            statusCode: 200 
        })
    }

    getData(): any  {
        return this.data
    }

    getDetails(): string {
        return this.details
    }

    getStatusCode(): number {
        return this.statusCode
    }


    /* -------------------------------------------------------------------------- */
    /*                                2XX: Success                                */
    /* -------------------------------------------------------------------------- */
    setCreated(){
        this.statusCode = 201
        this.details = 'Resource created with success.'
    }

    setNoContent(){
        this.statusCode = 204
        this.details = 'No content.'
    }
}