import { Router } from 'express'
import controllerHandler from '../../../global/handlers/controllerHandler'
import { getPaymentMethodController } from '../../controllers/payment_method';


const router = Router()

router.get('/', controllerHandler(getPaymentMethodController))


export default router