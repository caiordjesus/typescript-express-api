import { Request, Response, NextFunction } from 'express'

export const notFoundHandler = (_req: Request, res: Response): Response => {
    return res.status(404).json({
        status: 4,
        details: "Not Found",
        data: null
    })
}