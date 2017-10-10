import express from 'express'
import User from '../models/user'

const router = express.Router()

// router.post('/', (req, res) => {
//   const { credentials } = req.body
//   User.findOne({ email: credentials.email })
//     .then(user => {
//       if (user) {

//       } else {
//         res.status(400).json({ errors: {global: '用户不存在！'} })
//       }
//     })
// })

router.post('/', async (req, res) => {
  const { credentials } = req.body
  const user = await User.findOne({ email: credentials.email })
  // 未找到用户
  if (!user) { res.status(400).json({ errors: {global: '用户不存在！'} }) }
  // 找到用户并且密码正确
  if(user && user.isValidPassword(credentials.password)) { 
    res.json({ user: user.authJSON() })
  }

})

export default router





