import nodemailer from 'nodemailer'

const from = '"Bookfans" <info@bookfans.com>'

function setupTransport() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
}
// 向用户发生确认信息邮件
export function sendConfirmationEmail(user) {
  const transport = setupTransport()
  const email = {
    from,
    to: user.email,
    subject: 'Welcome to Bookfans',
    text: `
      Please comfirm your email
      ${user.generateComfirmEmailUrl()}
    `
  }
  transport.sendMail(email)
}

// 向用户发生重置密码邮件
export function sendResetPasswordEmail(user) {
  const transport = setupTransport()
  const email = {
    from,
    to: user.email,
    subject: '重置密码',
    text: `
      点击以下链接去重置密码
      ${user.generateResetPasswordLink()}
    `
  }
  transport.sendMail(email)
}










