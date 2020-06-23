const multer = require('multer')

const uploadAvatar = multer({
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Upload an image!'))
        }
        cb(undefined, true)
    }
})

module.exports = uploadAvatar