const multer = require("../middleware/uploadImage")

module.exports.uploadSingleImage = async (req,res)=>{
    res.json({status:"Single image uploaded successfully"});
}

module.exports.uploadMultipleImage = async (req,res)=>{
    res.json({status:"Multiple image uploaded successfully"});
}

module.exports.uploadMultipleInput = async (req,res)=>{
    res.json({status:"Multiple image with another input uploaded successfully"});
}
