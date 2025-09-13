import express from 'express'
import pdfRouter from './routes/pdf.routes.js'

const app = express()
const PORT = 8000

app.use(express.json())


app.use('/pdf', pdfRouter)


app.listen(PORT, ()=>{ console.log(`Node server listening to port ${PORT}`)})