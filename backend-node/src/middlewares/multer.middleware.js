import multer from 'multer'
import fs from 'fs'
import path from 'path' 

const dir = path.resolve('../backend-python/app');

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, dir),

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase() // --> ".pdf"
    const basename = path.basename(file.originalname, ext) // --> "resume"
    const filename = `${basename}-${Date.now()}${ext}`; // -->  resume-1694538293945.pdf

    fs.writeFileSync(
      path.resolve('../backend-python/app/filename.json'),
      JSON.stringify({ fileName: filename })
    );

    cb(null, filename);  // -->  resume-1694538293945.pdf
  },

});


const upload = multer({
  storage,

  fileFilter: (req, file, cb) => {
    if(file.mimetype === 'application/pdf'){
      cb(null, true)
    } else {
      cb(new Error('Only pdf files are allowed'), false)
    }
  },

  // limits: { fileSize: 20 * 1024 * 1024 }
});

export default upload;
