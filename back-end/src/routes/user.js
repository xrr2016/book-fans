import express from 'express'
import User from '../models/user'
import paseErrors from '../utils/parseErrors'
import { sendConfirmationEmail } from '../mail/mailer'

const router = express.Router()

router.post('/', async (req, res) => {
  const { email, password } = req.body.user
  const user = await new User({ email })
  user.setPassword(password)
  user.setConfirmationToken()
  return user
    .save()
    .then(newUser => {
      sendConfirmationEmail(newUser)
      res.json({ user: newUser.authJSON() })
    })
    .catch(err => res.status(400).json({ errors: paseErrors(err.errors) }))
})

export default router
