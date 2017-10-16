import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import decode from 'jwt-decode'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import 'semantic-ui-css/semantic.min.css'
import App from './App'
import { composeWithDevTools } from 'redux-devtools-extension'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './rootReducer'
import { userLoggedIn } from './actions/auth'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

if (localStorage.bookfansJWT) {
  const payload = decode(localStorage.getItem('bookfansJWT'))
  const user = {
    token: payload.token,
    email: payload.email,
    confirmed: payload.confirmed
  }
  store.dispatch(userLoggedIn(user))
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
