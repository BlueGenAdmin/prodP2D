const router = require('express').Router()
const AttendanceRoute = require('./controls/AttendanceCsrRoute')
const auth = require('../../middleware/authMiddleware')

router.get('/', auth.authMiddleware, (req, res) => {
    return res.status(200).render('csr/controls/attendance_form', {
        attendanceStatus: req.session.status,
        user: req.session.user
    })
})


router.get('/agentSetup', auth.authMiddleware, (req, res) => {
    return res.status(200).render('csr/agentSetup', {
        attendanceStatus: req.session.status,
        user: req.session.user
    })
})

router.get('/agentuseAgentPanel', auth.authMiddleware, (req, res) => {
    return res.status(200).render('csr/agentuseAgentPanel', {
        attendanceStatus: req.session.status,
        user: req.session.user
    })
})






router.use('/attendance', AttendanceRoute)

module.exports = router