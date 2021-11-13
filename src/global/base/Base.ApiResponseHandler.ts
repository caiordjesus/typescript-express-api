export abstract class BaseApiResponse {
    protected data: any
    protected details: string
    protected statusCode: number

    constructor({ data, details, statusCode }: { data: any, details: string, statusCode: number }) {
        this.data = data
        this.details = details
        this.statusCode = statusCode
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
}
