import BaseRepository from "../global/base/Base.Repository"

export default class ProductRepository extends BaseRepository {
    protected async create(dto: IProduct): Promise<any> {
        await this.ormClient?.produto.create({
            data: {
                nome: dto.name,
                preco_unitario: dto.unitaryPrice,
                metrica: dto.metric
            }
        })
    }
    protected delete(id: number): Promise<any> {
        return Promise.resolve({})
    }
    public async findOne(id: number): Promise<any> {
        const produto = await this.ormClient?.produto.findFirst({
            where: {
                id: id
            },
            include: {
                produto_personalizacao: {
                    include: {
                        personalizacao: true
                    }
                }
            }
        })

        return produto
    }
    protected async findMany(filter?: productFilter): Promise<any[]> {
        const produtos = await this.ormClient?.produto.findMany({
            include: {
                produto_personalizacao: true
            }
        }) || []
        console.log(produtos)
        return produtos
    }
}