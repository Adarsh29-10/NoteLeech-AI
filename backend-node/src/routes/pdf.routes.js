import express from 'express'
const router = express.Router()
import upload from '../middlewares/multer.middleware.js'

router.post('/upload', upload.single('PDF') , (req, res)=>{
    // console.log(req.file)
    res
        .status(200)
        .json({
            message: 'File uploaded succesfully in node',
            file: req.file
        })

})

export default router