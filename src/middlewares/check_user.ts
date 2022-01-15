export default async(req: any, res: any, next: any) => {
    const token = req.headers.token
    if(!token)
        return res.status(403).json({message: "Você tomou uma torta na cara"})
        
    return next()
}