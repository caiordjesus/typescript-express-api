import express from 'express'

import { User } from 'models/users'

const router = express.Router()

// App Health Check
router.get('/healthcheck', function(req: express.Request, res: express.Response) {
    res.json({ message: 'Status ok.' })
})

router.get('/users', async function(req: express.Request, res: express.Response) {
    try {
        let results: IUser[] = await User.find().exec()
        const users = results.map((x: any) => {
            const user: any = {}
            user["nome"] = x.user
            user["senha"] = x.pass
            return user
        })
        res.json({ message: `${ JSON.stringify(users) }` })
    } catch (error) {
        res.json({ message: `${ error }` })
    }
})

export default router