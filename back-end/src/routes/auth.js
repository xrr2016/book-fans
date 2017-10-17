import express from 'express'
import User from '../models/user'
import jwt from 'jsonwebtoken'
import { sendResetPasswordEmail } from '../mail/mailer'

const router = express.Router()

router.post('/', async (req, res) => {
  const { credentials } = req.body
  const user = await User.findOne({ email: credentials.email })
  // 未找到用户
  if (!user) {
    return await res.status(400).json({ errors: { global: '用户不存在！' } })
  }
  // 找打用户密码不正确
  if (user && !user.isValidPassword(credentials.password)) {
    return await res.status(400).json({ errors: { global: '密码错误！' } })
  }
  // 找到用户并且密码正确
  if (user && user.isValidPassword(credentials.password)) {
    return await res.json({ user: user.authJSON() })
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
        errors: { global: '验证码不存在' }
      })
})

router.post('/reset_password_request', async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  if (user) {
    sendResetPasswordEmail(user)
    res.json({})
  } else {
    res.status(400).json({
      errors: { global: '该邮箱未注册！' }
    })
  }
})
// 验证 Token
router.post('/validate_token', async (req, res) => {
  jwt.verify(req.body.token, process.env.JWT_SECRET, err => {
    if (err) {
      res.status(401).json({ errors: { global: '非法的 Token' } })
    } else {
      res.json({})
    }
  })
})
// 重置密码
router.post('/reset_password', async (req, res) => {
  const { password, token } = req.body.data
  const result = await jwt.verify(token, process.env.JWT_SECRET)
  if (result) {
    const user = await User.findById({ _id: result._id })
    if (user) {
      await user.setPassword(password)
      await user.save()
      return res.json({ success: true })
    } else {
      return res.status(404).json({ errors: { global: '非法的 Token' } })
    }
  }
})

export default router
