const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        get: () => {
            let hours = date.getHours()
            hours = (hours % 12) || 12
            const minutes = date.getMinutes()
            const month = date.getMonth()
            const year = date.getFullYear()
            const dateOfMonth = date.getDate()

            return `${month}/${dateOfMonth}/${year} ${hours}:${minutes}`
        }
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User