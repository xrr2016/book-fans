import express from 'express'
import User from '../models/user'
import paseErrors from '../utils/parseErrors'

const router = express.Router()

router.post('/', async (req, res) => {
  const { email, password } = req.body.user
  const user = await new User({ email })
  user.setPassword(password)
  return user
    .save()
    .then(newUser => res.json({ user: newUser.authJSON() }))
    .catch(err => res.status(400).json({ errors: paseErrors(err.errors) }))
})

export default router
