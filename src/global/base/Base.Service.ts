/* NOT IMPLEMENTED ON PROJECT */
import User from "./User";
export default abstract class BaseService {
    private static user: User;

    protected abstract load (params: any): Promise<void | any>

    injectProfile(user: User) {
        BaseService.user = user
    }

    public async executeService (params: any): Promise<any | void> {
        try {
            const result = await this.load(params)
            return result
        } catch (err) {
            throw err
        }
    }

    public getOriginalRequisitionProfile(){
        return BaseService.user
    }
}