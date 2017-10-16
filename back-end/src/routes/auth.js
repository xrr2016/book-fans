import express from 'express'
import User from '../models/user'

const router = express.Router()

router.post('/', async (req, res) => {
  const { credentials } = req.body
  const user = await User.findOne({ email: credentials.email })
  // 未找到用户
  if (!user) {
    return res.status(400).json({ errors: { global: '用户不存在！' } })
  }
  // 找到用户并且密码正确
  if (user && user.isValidPassword(credentials.password)) {
    return res.json({ user: user.authJSON() })
  }
})

router.post('/confirmation', async (req, res) => {
  const token = req.body.token
  const user = await User.findOneAndUpdate(
    { confirmationToken: token },
    { confirmationToken: '', confirmed: true },
    { new: true }
  )
  !!user
    ? res.json({ user: user.authJSON() })
    : res.status(400).json({
        message: '验证码不存在'
      })
})

export default router
