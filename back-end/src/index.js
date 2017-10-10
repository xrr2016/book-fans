import path from 'path';
import express from 'express'

const app = express()

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/api/auth', (req, res) => {
  res.status(400).json({ errors: {global: "用户名或密码错误"} })
})

app.listen(6789, () => console.log('Running on localhost:6789'))