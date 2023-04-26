import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import bodyParser from 'body-parser'
dotenv.config()
import corsOptions from './config/corsOptions.js'
import Connection from './database/db.js';
import router from './routes/router.js'

const PORT = process.env.PORT || 8000
const app = express()
Connection()

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(corsOptions))
app.use('/', router)

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`))

