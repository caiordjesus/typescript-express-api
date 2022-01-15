import { mostAccessedProductsWithUseCase } from 'controllers/products'
import { Router } from 'express'
import controllerHandler from 'global/handlers/controllerHandler'

const router = Router()

router.get('/mais_acessados', controllerHandler(mostAccessedProductsWithUseCase))

export default router