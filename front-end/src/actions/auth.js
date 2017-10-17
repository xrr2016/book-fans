import api from '../api'
import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types'

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
})
export const userLogout = () => ({
  type: USER_LOGGED_OUT
})
// 用户登录
export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.setItem('bookfansJWT', user.token)
    dispatch(userLoggedIn(user))
  })
// 用户登出
export const logout = () => dispatch => {
  localStorage.removeItem('bookfansJWT')
  dispatch(userLogout())
}
// 用户确认邮箱
export const confirm = token => dispatch =>
  api.user.confirm(token).then(user => {
    localStorage.setItem('bookfansJWT', user.token)
    dispatch(userLoggedIn(user))
  })
// 忘记密码
export const resetPasswordResquest = ({ email }) => () =>
  api.user.resetPasswordResquest(email)
// 验证 Token
export const validateToken = token => () => api.user.validateToken(token)
// 重置密码
export const resetPassword = data => () => api.user.resetPassword(data)
