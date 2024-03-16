const multer = require("multer");

function checkFile(file, cb) {
  if (file.fieldname === "alamatPath") {
    if (file.mimetype === "application/pdf" ||
    file.mimetype === "application/msword" ||
    file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      cb(null, true);
    } else {
      cb(new Error("File harus berupa PDF/Doc/Docx"), false);
    }
  } else {
    cb(new Error("File tidak valid"), false);
  }
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/lampiran/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
      }
  })

const uploadFile = multer({
    storage: storage,
    limits: {
      fileSize: 20000000,
    },
    fileFilter: (req, file, cb) => {
      checkFile(file, cb);
    },
    
  });


module.exports = { uploadFile };
