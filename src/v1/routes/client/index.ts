import { getAdressesController } from '../../controllers/client'
import { Router } from 'express'
import controllerHandler from '../../../global/handlers/controllerHandler'


const router = Router()

router.get('/enderecos', controllerHandler(getAdressesController))

export default router