import path from 'path'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import auth from './routes/auth'
import user from './routes/user'

dotenv.config()
const app = express()
app.use(bodyParser.json())
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URL, { useMongoClient: true })

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use('/api/auth', auth)
app.use('/api/user', user)

// app.post('/api/auth', (req, res) => {
//   res.status(400).json({ errors: {global: "用户名或密码错误"} })
// })

app.listen(6000, () => console.log('Running on localhost:6000'))
