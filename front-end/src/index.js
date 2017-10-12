import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
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

const token = localStorage.getItem('bookfansJWT')
if (token) store.dispatch(userLoggedIn({ token }))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
