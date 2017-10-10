import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types'
import api from '../api'

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
})
export const userLogout = () => ({
  type: USER_LOGGED_OUT
})
// 用户登录
export const login = credentials => 
  (dispatch) => api.user.login(credentials)
  .then(user => {
    localStorage.setItem('bookfansJWT', user.token)
    dispatch(userLoggedIn(user))
  })
// 用户登出
export const logout = () => 
 (dispatch) => { 
  localStorage.removeItem('bookfansJWT')
  dispatch(userLogout())
}