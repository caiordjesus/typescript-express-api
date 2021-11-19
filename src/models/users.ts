import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    }
})

const User = mongoose.model('user', userSchema)

export { User }