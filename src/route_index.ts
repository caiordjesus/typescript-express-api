import express from 'express'
import router_v1 from './v1'


const router = express.Router()

// App Health Check
router.get('/healthcheck', function(req: express.Request, res: express.Response) {
    res.json({ message: 'Status ok.' })
})

router.use('/v1', router_v1)

export default router