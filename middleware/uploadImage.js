const multer = require('multer');
module.exports = multer({
  storage: multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,"uploads")
    },
    filename: (req,file,cb)=>{
      const {originalname } = file;
      cb(null,`${Date.now()}-${originalname}`)
    },
  }),
  limits: {
    fileSize: 10000000, // max file size 10MB = 10000000 bytes
  },
  fileFilter(req, file, cb) {
    if (file.mimetype.split("/")[0] === "image") {
        cb(null, true); // continue with upload
    }else{
        return cb(
            new Error(
              'Le type de fichier est incorrect',false
            )
          );
    }
  },
});