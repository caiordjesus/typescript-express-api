import express from 'express'

const router = express.Router()

// App Health Check
router.get('/healthcheck', function(req: express.Request, res: express.Response) {
    res.json({ message: 'Status ok.' })
})

export default router