import { getOrdersController } from '../../controllers/orders'
import { Router } from 'express'
import controllerHandler from '../../../global/handlers/controllerHandler'


const router = Router()

router.get('/', controllerHandler(getOrdersController))

export default router