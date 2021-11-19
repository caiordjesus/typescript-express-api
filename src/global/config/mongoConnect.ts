import mongoose from 'mongoose'

const user = process.env.mongoUser || 'kipao'
const password = process.env.mongoPass || 'kipao'
const host = process.env.mongoHost || 'kipao.y8guv.mongodb.net'

const connectionURL = `mongodb+srv://${user}:${password}@${host}/kipao?authSource=admin&replicaSet=atlas-m1idip-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true`

export async function mongoConnect() {
    await mongoose.connect(connectionURL)
    console.log("*** mongo connected ***")
}