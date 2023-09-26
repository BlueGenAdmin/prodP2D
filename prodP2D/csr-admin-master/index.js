const express = require('express')
const session = require('express-session')
const dotenv= require('dotenv')
const path = require('path')
const app = express()
const multer = require("multer")
const Image = require("./models/uploadedImage")


const conn = require('./utils/conn')
// routes
const {  UserRoute, LoginRoute, CsrRoute, AttendanceRoute } = require('./routes/index')
// middleware
const auth = require('./middleware/authMiddleware')
dotenv.config()

conn.connect()

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(session({
    secret: process.env.SECRET_TEXT,
    resave: false,
    saveUnintialized: true
}))

// view engine
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./public/views"))



//uploading Image 





// Handle file uploads and image description
// app.post('/marketingUpload', upload.single('image'), async (req, res) => {
//     try {
//       const { description,note } = req.body;
//       const { filename, path: filePath } = req.file;
  
//       const newImage = new Image({
//         note,
//         description,
//         filename,
//         filePath,
//       });
  
//       await newImage.save();
//       res.redirect('/tl/bulletin_board');
    
  
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
  
  
//   })












// static files
app.use("/img", express.static(path.resolve(__dirname, "./public/img")))
app.use("/css", express.static(path.resolve(__dirname, "./public/css")))
app.use("/scss", express.static(path.resolve(__dirname, "./public/scss")))
app.use("/js", express.static(path.resolve(__dirname, "./public/js")))
app.use("/vendor", express.static(path.resolve(__dirname, "./public/vendor")))
app.use("/uploads", express.static(path.resolve(__dirname, "./public/uploads")))

// routes
app.use('/attendance', AttendanceRoute)
app.use('/csr', CsrRoute)
app.use('/login', LoginRoute)
app.use('/', UserRoute)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening to  ${process.env.HOST}:${process.env.SERVER_PORT}`)
})