import express from 'express'
import dotenv from 'dotenv'
import {router} from './Routes/route.js'
import { connectDB } from './Config/dbConnect.js'
const app = express()
dotenv.config()
app.use(express.json())

// Database Connection
connectDB()
    
app.use('/',router)


const port = process.env.app_port || 5000
app.listen(port,()=>{
    console.log(`Server is Started at http://localhost:${port} `)
})