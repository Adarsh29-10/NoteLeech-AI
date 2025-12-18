import express, { urlencoded } from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

import pdfRouter from './routes/pdf.routes.js'
import chatRouter from './routes/chat.routes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = 8000

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Serve static files from public directory
app.use('/pdfs', express.static(path.join(__dirname, '../public/pdfs')))

app.use('/pdf', pdfRouter)
app.use(chatRouter)


app.listen(PORT, ()=>{ console.log(`Node server listening to port ${PORT}`)})