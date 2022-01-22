require('module-alias/register')
import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import routes from './route_index';
import route_map from './assets/route_map'
import server from './server'

const app = express()
app.use(cors({
    origin: '*',
}))

dotenv.config()

app.use(routes)
app.use(bodyParser.json())

route_map(app)
server(app)

export default app
