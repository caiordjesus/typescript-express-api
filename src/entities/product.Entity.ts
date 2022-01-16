import ProductRepository from "repositories/product.Repository";


// TODO: extends BaseEntity (after it have been created)
// TODO: does not import repository directly
export class Product {
    private id?: number
    private name: string
    private unitaryPrice: number
    private metric: string

    constructor(product?: IProduct){
        this.name = product?.name || ''
        this.unitaryPrice = product?.unitaryPrice || 0
        this.metric = product?.metric || 'un'
    }

    getName(){
        return this.name
    }

    getPrice(){
        return this.unitaryPrice
    }

    getMetricType(){
        return this.metric
    }

    save(){
        if(!this.name || !this.unitaryPrice){
            return new Error("Name and unitary price must have a value")
        }
        const productRepo = new ProductRepository()
        const dto: IProduct = {
            metric: this.metric,
            name: this.name,
            unitaryPrice: this.unitaryPrice
        }
        productRepo.createNew(dto)
    }
}