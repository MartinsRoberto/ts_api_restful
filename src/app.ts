require('dotenv').config()

import express from 'express'
import config from 'config'
import conn from '../config/db'
import router from './router'


const app = express()

app.use(express.json())

app.use('/api', router)

app.listen(3000, async () => {
  await conn()
  
  console.log("Connected to server")
})