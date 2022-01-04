import { redisClientConnect } from './global/config/redis_config';
import express from 'express'

const router = express.Router()

// App Health Check

router.get('/healthcheck', function(req: express.Request, res: express.Response) {
    res.json({ message: 'Status ok.' })
})

router.get('/produtos/mais_acessados', async function(req: express.Request, res: express.Response) {
    const client = await redisClientConnect()
    
    const value = (await client.get('lista:10_produtos_mais_acessados')) || ''
    
    res.json(JSON.parse(value))
})

export default router