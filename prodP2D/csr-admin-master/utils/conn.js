const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({
    path: '../.env'
})

exports.connect = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected lmao')
    })
    .catch(() => {
        console.error("error lmao")
    })
}