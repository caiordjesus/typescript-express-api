import BaseRepository from "../global/base/Base.Repository"

export default class OrderRepository extends BaseRepository {
    protected async create(dto: IOrder): Promise<any> {
        return Promise.resolve({})
    }
    protected delete(id: number): Promise<any> {
        return Promise.resolve({})
    }
    protected findOne(id: number): Promise<any> {
        return Promise.resolve({})
    }
    protected async findMany(filter?: orderFilter): Promise<any[]> {
        return await this.ormClient?.pedido.findMany() || []
    }
}