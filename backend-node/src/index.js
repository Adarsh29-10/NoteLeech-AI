import express, { urlencoded } from 'express'
import cors from 'cors'

import pdfRouter from './routes/pdf.routes.js'
import chatRouter from './routes/chat.routes.js'

const app = express()
const PORT = 8000

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/pdf', pdfRouter)
app.use(chatRouter)


app.listen(PORT, ()=>{ console.log(`Node server listening to port ${PORT}`)})