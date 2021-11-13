import findById from '../../modules/profiles/repository/profile.repository'

const getProfile = async (req: any, res: any, next: any) => {
    const id = req.get('profile_id') || 0
    const profile = await findById(id)
    
    if(!profile) return res.status(401).end()
    req.profile = profile
    next()
}
export {
    getProfile
}