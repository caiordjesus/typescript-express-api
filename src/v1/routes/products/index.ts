import { mostAccessedProductsWithUseCase, ProductsWithUseCase, postProductWithUseCase, getProductById } from '../../controllers/products'
import { Router } from 'express'
import controllerHandler from '../../../global/handlers/controllerHandler'

const router = Router()

router.get('/mais_acessados', controllerHandler(mostAccessedProductsWithUseCase))
router.get('/', controllerHandler(ProductsWithUseCase))
router.post('/', controllerHandler(postProductWithUseCase))
router.get('/:id_produto', controllerHandler(getProductById))

export default router