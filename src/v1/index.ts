import { Router } from 'express'
import auth_routes from './routes/auth'
import products_routes from './routes/products'
import { check_user_middleware } from '../middlewares'

const router = Router()

router.use('/auth', auth_routes)
router.use('/produtos', check_user_middleware, products_routes)

export default router