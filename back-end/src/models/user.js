import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema(
  { 
    email: { type: String , required: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true }
  }, 
  { timestamps: true }
)

// 匹配用户密码
userSchema.methods.isValidPassword = function isValidPassword (password) {
  return bcrypt.compareSync(password, this.passwordHash)
}
// 生成 Token
userSchema.methods.generateJWT = function generateJWT () {
  return jwt.sign({ email: this.email }, process.env.JWT_SECRET)
}
// 验证 Token
userSchema.methods.authJSON = function authJSON () {
  return {
    email: this.email,
    token: this.generateJWT()
  }
}

export default mongoose.model('User', userSchema)