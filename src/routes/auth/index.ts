import controllerHandler from '@global/handlers/controllerHandler'
import { loginControllerWithUseCase } from 'controllers/auth'
import { Router } from 'express'


const router = Router()

router.post('/login', controllerHandler(loginControllerWithUseCase))
router.post('/cadastro')

export default router