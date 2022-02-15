export default async(req: any, res: any, next: any) => {
    const basic_auth = req.headers.basic_auth?.toString()
    const basic_auth_splitted = basic_auth.includes(':') ? basic_auth?.split(':') : null
    
    if(!basic_auth || basic_auth_splitted.length < 2) {
        return res.status(403).json({message: "Você tomou uma torta na cara"})
    }

    const user = basic_auth_splitted[0]
    const password = basic_auth_splitted[1]
    if (user != 'caio' && password != 'walter') {
        return res.status(403).json({message: "credenciais inválidas"})
    }
        
    return next()
}