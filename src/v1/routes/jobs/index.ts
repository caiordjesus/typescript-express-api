import { Router } from 'express'
import prisma from '../../../global/config/prisma_config'

const router = Router()

router.post('/invokeById/:process_id', async (req, res) => {
    const processId = parseInt(req.params.process_id) || 0

    if (processId !== 1) {
        return res.json({message:'Not supported!'})
    }

    return res.json({message:'unimplemented!'})
})


export default router