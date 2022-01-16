import express from 'express'

import auth_routes from './routes/auth'
import products_routes from './routes/products'
import { check_user_middleware } from './middlewares'

const router = express.Router()

// App Health Check
router.get('/healthcheck', function(req: express.Request, res: express.Response) {
    res.json({ message: 'Status ok.' })
})

router.use('/v1/auth', auth_routes)
router.use('/v1/produtos', check_user_middleware, products_routes)

export default router