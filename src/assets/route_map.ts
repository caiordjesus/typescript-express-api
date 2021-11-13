const listEndpoints = require('express-list-endpoints')
import color from './colors'

export default function (app: any) {
    const array_endpoints = listEndpoints(app)

    const admin_endpoints = array_endpoints.filter((x: any) => x.path.includes('admin'))
    const balances_endpoints = array_endpoints.filter((x: any) => x.path.includes('balances'))
    const jobs_endpoints = array_endpoints.filter((x: any) => x.path.includes('jobs'))
    const contracts_endpoints = array_endpoints.filter((x: any) => x.path.includes('contracts'))

    console.info(color.bright, color.fgGreen, `########## Route Map ##########`)
    for(const endpoint of admin_endpoints) {
        console.info(color.bright, color.fgYellow, `${endpoint.methods} ----- ${endpoint.path}`)
    }
    for(const endpoint of balances_endpoints) {
        console.info(color.bright, color.fgBlue, `${endpoint.methods} ----- ${endpoint.path}`)
    }
    for(const endpoint of jobs_endpoints) {
        console.info(color.bright, color.fgCyan, `${endpoint.methods} ----- ${endpoint.path}`)
    }
    for(const endpoint of contracts_endpoints) {
        console.info(color.bright, color.fgMagenta, `${endpoint.methods} ----- ${endpoint.path}`)
    }
    console.info(color.bright, color.fgGreen, `###############################\n\n`)


}