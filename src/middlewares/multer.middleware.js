import multer from "multer";

const storage = multer.diskStorage({ //diskstorage multer
    destination: function (req, file, cb) {
      cb(null, "./public/temp/.gitkeep")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
  export const upload = multer({ 
     storage, 
})