const router = require('express').Router()
const auth = require('../middleware/authMiddleware')
const AttendanceService = require('../services/AttendanceService')
const UserService = require('../services/UserService')

router.get('/', auth.authMiddleware, async (req, res) => {
    try {
        const attendances = await AttendanceService.getAttendance()
        return res.status(200).render('attendance', {
            attendances
        })
    } catch (error) {
        return res.status(400).send(error.message)
    }
})
// get attendance by time in and out
router.get('/status/:status', auth.authMiddleware, async (req, res) => {
    try {
        const user = req.session.user
        const { status } = req.params

        const attendances = await AttendanceService.getAttendanceStatus(status)
        console.log(attendances);

        return res.status(200).render('attendance_status', {
            attendances
        })
    } catch (error) {
        return res.status(400).send('Status was not found')
    }
})
// get attendance by time in and out by id
router.get('/:id', auth.authMiddleware, async (req, res) => {
    try {
        const user = req.session.user
        const { status, id } = req.params

        const userDetails = await UserService.findUserById(id)
        const attendance = await AttendanceService.getAttendanceStatusById(id, status)

        return res.status(200).render('attendance_id', {
            user,
            attendance,
        })
    } catch (error) {
        return res.status(400).send('Status by id was not found')
    }
})

module.exports = router