
import { Router } from 'express'
import { getPersonalizationsController } from 'v1/controllers/personalizations'
import controllerHandler from '../../../global/handlers/controllerHandler'

const router = Router()

router.get('/', controllerHandler(getPersonalizationsController))

export default router