const multer = require("multer");
const path = require("path");

const storeOnDisk = multer.diskStorage({
    destination: path.join(__dirname, "..", "uploads"),
    filename: function (req, file, res) {
        const imgName = Date.now() + "_" + file.originalname;

        req.body.imgId = imgName;

        res(null, imgName); 
    },
});

const fileFilterConfig = function (req, file, cb) {
    if (file.mimetype === "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const uploadOnDisk = multer({
    storage: storeOnDisk,
    limits: {
        fileSize: 1024 * 1024 * 10 //10mb max file size
    },
    fileFilter: fileFilterConfig,
});

module.exports = {
    uploadOnDisk
}