import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import unique from 'mongoose-unique-validator'

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
      unique: true
    },
    passwordHash: { type: String, required: true },
    comfirmed: { type: Boolean, default: false },
    comfirmationToken: { type: String, default: '' }
  },
  { timestamps: true }
)

// 生成用户确认 Token
userSchema.methods.setConfirmationToken = function setConfirmationToken() {
  this.comfirmationToken = this.generateJWT()
}
// 生成用户密码
userSchema.methods.setPassword = function setPassword(password) {
  this.passwordHash = bcrypt.hashSync(password, 10)
}
// 生成用户确认邮箱链接
userSchema.methods.generateComfirmEmailUrl = function generateComfirmEmailUrl() {
  return `${process.env.HOST}/comfirmation/${this.comfirmationToken}`
}
// 匹配用户密码
userSchema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.passwordHash)
}
// 生成 Token
userSchema.methods.generateJWT = function generateJWT() {
  return jwt.sign({ email: this.email }, process.env.JWT_SECRET)
}
// 验证 Token
userSchema.methods.authJSON = function authJSON() {
  return {
    email: this.email,
    comfirmed: this.comfirmed,
    token: this.generateJWT()
  }
}
// 验证邮箱唯一性
userSchema.plugin(unique, { message: '这个邮箱已经被注册了。' })

export default mongoose.model('User', userSchema)
