declare namespace Express {
    export interface Request {
        profile: any
    }
}

interface HttpRequest {
    body: { [key: string]: any }
    query: { [key: string]: any }
    params: { [key: string]: any }
    profile: any,
    ip: string
    method: string
    path: string
    headers: { [key: string]: any }
}

interface HttpResponse {
    statusCode: number
    resJson: any
}

abstract class BaseApiError {
    protected message?: string

    constructor(message?: string)

    getMessage(): string
}