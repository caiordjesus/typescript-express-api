import { getOrdersController } from '../../controllers/orders'
import { Router } from 'express'
import controllerHandler from '../../../global/handlers/controllerHandler'
import { PrismaClient } from "@prisma/client";
import { getPaymentMethodController } from 'v1/controllers/payment_method';


const router = Router()

router.get('/', controllerHandler(getPaymentMethodController))


export default router