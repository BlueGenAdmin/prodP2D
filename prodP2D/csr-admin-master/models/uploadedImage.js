const mongoose = require("mongoose")



const imageUpload = new mongoose.Schema({

    description:{
        type:String,
        require:true
    },
    note:{
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
    },
    createdAt: {
        type: Date,
        default: Date.now
      }
 


})
const ImageUpload = mongoose.model("imageUpload",imageUpload)

module.exports = ImageUpload;