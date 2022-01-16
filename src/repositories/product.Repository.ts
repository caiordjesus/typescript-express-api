import BaseRepository from "../global/base/Base.Repository"

export default class ProductRepository extends BaseRepository {
    protected create(dto: any): Promise<any> {
        return Promise.resolve({})
    }
    protected delete(id: number): Promise<any> {
        return Promise.resolve({})
    }
    protected findOne(id: number): Promise<any> {
        return Promise.resolve({})
    }
    protected async findMany(filter?: productFilter): Promise<any[]> {
        const produtos = await this.ormClient?.produto.findMany() || []
        return produtos
    }
}