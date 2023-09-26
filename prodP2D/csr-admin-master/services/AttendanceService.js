const { Attendance } = require('../models/index')
const parser = require('../utils/csvConfig')





exports.recordAttendance =   async (csrId, username, role, attendanceStatus,description,note,filename,filePath) => {
    

    try {
        
        const attendance = new Attendance({
            csrId,
            username,
            role,
            attendanceStatus,
            description,
            filename,
            filePath
        })

        const result = await attendance.save()
        return result
    } catch (error) {
        return new Error(error.message)
    }
}

exports.getAttendance = async () => {
    try {
        const attendance = await Attendance.find({})
        return attendance
    } catch (error) {
        return new Error('Error creating user')
    }
}

exports.getAttendanceStatus = async (status) => {
    try {
        const attendance = await Attendance.find({
            attendanceStatus: status
        })
        return attendance
    } catch (error) {
        return new Error('Status was not found')
    }
}

exports.getAttendanceStatusById = async (id, status) => {
    try {
        const attendance = await Attendance.find({
            csrId: id,
            attendanceStatus: status
        }).select("username role attendanceStatus date")

        return attendance
    } catch (error) {
        return new Error('Status by id was not found')
    }
}

exports.getAttendanceById = async (id) => {
    try {
        const attendance = await Attendance.find({
            csrId: id
        }).select("username role attendanceStatus date")

        return attendance
    } catch (error) {
        return new Error('No attendance was return')
    }
}

exports.exportAttendance = async (id) => {
    try {
        const fields = ["username", "role", "attendance_status", "date"]

        const attendance = await this.getAttendanceById(id)
        console.log({attendance});

        const csvData = await parser.parseCsv(fields, attendance)
        
        return csvData
    } catch (error) {
        return new Error('Error returing the csv data')
    }
}

exports.exportAttendanceByMonth = async (id, month) => {
    try {
        const serverDate = new Date()
        const year = serverDate.getFullYear()
 
        const fields = ["username", "role", "attendance_status", "date"]

        const attendance = await Attendance.find({
            csrId: id,
            date: {
                $gte: `${year}/${month}/1`,
                $lte: `${year}/${month}/31`
            }
        }).select('username role attendanceStatus date')

        const csvData = await parser.parseCsv(fields, attendance)

        return csvData
    } catch (error) {
        return new Error('Error returing the csv data')
    }
}