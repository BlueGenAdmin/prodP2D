const router = require('express').Router()
const UserService = require('../services/UserService')
const AttendanceService = require('../services/AttendanceService')

router.get('/', (req, res, next) => {
    if (req.session.user) {
        return next()
    } else {
        return res.status(200).render('login')
    }
})

router.get('/logout', async (req, res) => {
    try { 
        const user = req.session.user
        const username = user.username
        const role = user.role
        const id = user._id

        if (role === "csr") {
            const record = await AttendanceService.recordAttendance(id, username, role, "out")
            if (record) {
                req.session.destroy();
                return res.status(200).redirect('/login')
            }
        } else {
            req.session.destroy();
            return res.status(200).redirect('/login')
        }
    } catch (error) {
        return res.status(400).send('error logging out')
    }
})

router.post('/', async (req, res) => {
    try {

        const {
            username,
            password,
            role
        } = req.body

        const user = await UserService.findUser(username, password, role)

        if (user instanceof Error) {
            // storing the data in session sheshables
            return res.status(200).redirect('/login')
        } else {
            req.session.user = user[0]
            console.log(req.session.user.role);
            if (user[0].role === "admin") {
                return res.status(200).redirect('/')
            } else if (user[0].role === "csr") {
                console.log("request processing");
                return res.status(200).redirect('/csr')
            }
        }
    } catch (error) {
        return res.status(400).send("Wrong credentials")
    }
})

module.exports = router