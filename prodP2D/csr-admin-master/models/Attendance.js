const mongoose = require('mongoose')
const Schema = mongoose.Schema

const convertDate = (date) => {
    let hours = date.getHours()
    hours = (hours % 12) || 12
    const minutes = date.getMinutes()
    const month = date.getMonth()
    const year = date.getFullYear()
    const dateOfMonth = date.getDate()

    return `${month}/${dateOfMonth}/${year} ${hours}:${minutes}`
}

const AttendanceSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    csrId: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    attendanceStatus: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        get: convertDate
    },
    description:{
        type:String,
        require:true
    },
    filename:{
        type:String,
        require:true
    },
    filePath:{
        type:String,
        require:true
    }
 

})


const Attendance = mongoose.model('Attendance', AttendanceSchema)

module.exports = Attendance