const  express = require("express");
const { uploadSingleImage ,uploadMultipleImage,uploadMultipleInput} = require("../controller/uploadController");
const multer = require("../middleware/uploadImage")

const router = express.Router()

router.post("/single", multer.single('file'), uploadSingleImage)

router.post("/multiple", multer.array('file'), uploadMultipleImage)

router.post("/multipleInput", multer.fields([{name:"avatar"},{name:"resume"}]), uploadMultipleInput)



module.exports = router;