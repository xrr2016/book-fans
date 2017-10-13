import api from '../api'
import { userLoggedIn } from './auth'

// 用户注册
export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.setItem('bookfansJWT', user.token)
    dispatch(userLoggedIn(user))
  })
