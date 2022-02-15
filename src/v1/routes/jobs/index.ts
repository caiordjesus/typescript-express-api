import { Router } from 'express'
import prisma from '../../../global/config/prisma_config'

const router = Router()

router.post('/invokeById/:process_id', async (req, res) => {
    const processId = parseInt(req.params.process_id) || 0

    if (processId !== 1) {
        return res.json({message:'Not supported!'})
    }

    try {
        await prisma.$executeRaw`call criar_recorrencias()`;
    } catch (error) {
        return res.status(503).json({message: 'Server error on calling routine.'})
    }
    

    return res.status(201).json({message:'Executed routine successfully'})
})


export default router