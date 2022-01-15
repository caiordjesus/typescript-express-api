/* NOT IMPLEMENTED ON PROJECT */
export default abstract class BaseService {

    protected abstract load (params: any): Promise<void | any>

    public async executeService (params: any): Promise<any | void> {
        try {
            const result = await this.load(params)
            return result
        } catch (err) {
            throw err
        }
    }
}