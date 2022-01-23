import BaseController from "../../../global/base/Base.Controller"

export default class GetAdressesController extends BaseController{
    constructor(useCase: any) {
        super(useCase)
    }

    protected async executeImpl(req: HttpRequest): Promise<any> {
        // const products = await this.useCase.execute()

        return this.responseSuccess.ok({
            enderecos: [
                {
                    cep: '26156-012',
                    logradouro: 'Rua mockupada',
                    numero: '100',
                    complemento: 'Bl 2 Apt 1651',
                },
            ]
        })
    }
}