const listEndpoints = require('express-list-endpoints')
import color from './colors'

export default function (app: any) {
    const array_endpoints = listEndpoints(app)

    console.info(color.bright, color.fgGreen, `########## Route Map ##########`)
    for(const endpoint of array_endpoints) {
        console.info(color.bright, color.fgYellow, `${endpoint.methods} ----- ${endpoint.path}`)
    }
    console.info(color.bright, color.fgGreen, `###############################\n\n`)
}