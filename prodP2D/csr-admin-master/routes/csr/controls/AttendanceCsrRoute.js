const router = require('express').Router()
const auth = require('../../../middleware/authMiddleware')
const AttendanceService = require('../../../services/AttendanceService')
const UserService = require('../../../services/UserService')
const multer = require("multer");
const path = require('path');




const storage = multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      callback(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
  });
  

const upload = multer({ storage: storage });

router.get('/form', auth.authMiddleware, (req, res) => {
    return res.status(200).render('csr/controls/attendance_form', {
        user: req.session.user,
        attendanceStatus: req.session.status
    })
})

router.post('/time_in',upload.single('image'),auth.authMiddleware, async (req, res) => {
    try {
       
        const {
            username,
            description,
            csrId,
            role,
            attendanceStatus
        } = req.body;
        const { filename, path: filePath  } = req.file;
        console.log(req.ip)

        req.session.status = attendanceStatus
        const timeIn = await AttendanceService.recordAttendance(csrId, username, role, attendanceStatus,description,filename,filePath)
        console.log({timeIn});
        if (timeIn) {
            return res.status(200).redirect('/csr/attendance/form')
        }

        return res.status(400).send('error recording attendance')
    } catch (error) {
        return res.status(400).send(error.message)
    }
})

router.post('/time_out',upload.single('image'),auth.authMiddleware,async (req, res) => {
    try {
        const {
            username,
            description,
            csrId,
            role,
            attendanceStatus
        } = req.body;
        const { 
            filename, 
            path: filePath 
        } = req.file;

     

        req.session.status = attendanceStatus
        const timeOut = await AttendanceService.recordAttendance(csrId, username, role, attendanceStatus,description,filename,filePath)
        if (timeOut) {
            return res.status(200).redirect('/csr/attendance/form')
        }

        return res.status(400).send('error recording attendance')
    } catch (error) {
        return res.status(400).send(error.message)
    }
})

router.get('/', async (req, res) => {
    try {
        const attendances = await AttendanceService.getAttendance()
        return res.status(200).render()
    } catch (error) {
        return res.status(400).send(error.message)
    }
})

// get attendance by id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const attendanceById = await AttendanceService.getAttendanceById(id)

        return res.status(200).render('csr/controls/attendance_id', {
            attendanceById,
            user: req.session.user,
            attendanceStatus: req.session.status
        })
    } catch (error) {
        return res.status(400).send(error.message)
    }
})
// get attendance by time in and out
router.get('/:status', async (req, res) => {
    try {
        const { status } = req.params

        const attendanceStatus = await AttendanceService.getAttendanceStatus(status)

        return res.status(200).render('csr/controls/attendance_status', {
            attendanceStatus,
            user: req.session.user,
            attendanceStatus: req.session.status
        })
    } catch (error) {
        return res.status(400).send('Status was not found')
    }
})

router.get('/download/:id', async (req, res) => {
    try {
        const username = req.session.user.username
        console.log(req.session.user)
        const { id } = req.params
        const csv = await AttendanceService.exportAttendance(id)
        res.set({
            'Content-Type': 'text/csv',
            "Content-Disposition": "attachment;" + username + ".csv"
        })
        return res.status(200).send(csv)
    } catch (error) {
        return res.status(400).send('Error downloading the file')
    }
})

router.post('/download/:id', async (req, res) => {
    try {
        const username = req.session.user.username
        const { id } = req.params
        const { month } = req.body

        const csv = await AttendanceService.exportAttendanceByMonth(id, month)

        res.set({
            'Content-Type': 'text/csv',
            "Content-Disposition": "attachment;" + username + ".csv"
        })
        return res.status(200).send(csv)
    } catch (error) {
        return res.status(400).send('Error downloading the file')
    }
})

module.exports = router