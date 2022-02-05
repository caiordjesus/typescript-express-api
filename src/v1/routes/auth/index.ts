import { loginControllerWithUseCase, signupControllerWithUseCase } from '../../controllers/auth'
import { Router } from 'express'
import controllerHandler from '../../../global/handlers/controllerHandler'


const router = Router()

router.post('/login', controllerHandler(loginControllerWithUseCase))
router.post('/signup', controllerHandler(signupControllerWithUseCase))

export default router