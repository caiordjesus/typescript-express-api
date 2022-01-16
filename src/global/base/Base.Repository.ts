import { Prisma, PrismaClient } from "@prisma/client";

export default abstract class BaseRepository {
    
    protected ormClient?: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>
    protected connected: boolean

    constructor() {
        this.connected = false
    }

    protected abstract findOne (id?: number): Promise<any>
    protected abstract findMany (filter: any): Promise<any[]>
    protected abstract create (dto: any): Promise<any>
    protected abstract delete (id: number): Promise<any>
    
    public async findById(id?: number): Promise<any> {
        try {
            this.connect()
            const obj = await this.findById(id)
            this.disconnect()
            return obj
        } catch (err) {
            this.disconnect()
            console.log('[BASE REPOSITORY - ERROR] msg:', err)
        }
    }

    public async find(filter?: any): Promise<any> {
        try {
            this.connect()
            const obj = await this.findMany(filter)
            this.disconnect()
            return obj
        } catch (err) {
            this.disconnect()
            console.log('[BASE REPOSITORY - ERROR] msg:', err)
        }
    }

    public async createNew(dto: any): Promise<any> {
        try {
            this.connect()
            const obj = await this.create(dto)
            this.disconnect()
            return obj
        } catch (err) {
            this.disconnect()
            console.log('[BASE REPOSITORY - ERROR] msg:', err)
        }
    }

    private connect() {
        if (!this.connected) {
            this.ormClient = new PrismaClient()
            this.connected = true
        }
    }

    private disconnect() {
        if (this.ormClient && this.connected) {
            this.ormClient.$disconnect()
            this.connected = false
        }
    }
}