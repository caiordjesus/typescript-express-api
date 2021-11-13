import express from 'express'
const router = express.Router()


router.use('/', (req: any, res: any) => { res.json({"message": "Cheguei"}) })

export default router