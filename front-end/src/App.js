import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import AppHomePage from './components/pages/AppHomePage'
import AppConfirmationPage from './components/pages/AppConfirmationPage'
import AppLoginPage from './components/pages/AppLoginPage'
import AppSignupPage from './components/pages/AppSignupPage'
import AppDashboard from './components/pages/AppDashboard'
import AppUserRoute from './components/routes/AppUserRoute'
import AppGuestRoute from './components/routes/AppGuestRoute'

const App = ({ location }) => (
  <div>
    <div className="ui fixed inverted menu">
      <div className="ui container">
        <span className="header item">主页</span>
      </div>
    </div>
    <div className="ui main text container" style={{ marginTop: '7em' }}>
      <Route location={location} path="/" exact component={AppHomePage} />
      <Route
        location={location}
        path="/confirmmation/:token"
        exact
        component={AppConfirmationPage}
      />
      <AppGuestRoute
        location={location}
        path="/login"
        exact
        component={AppLoginPage}
      />
      <AppGuestRoute
        location={location}
        path="/signup"
        exact
        component={AppSignupPage}
      />
      <AppUserRoute
        location={location}
        path="/dashboard"
        exact
        component={AppDashboard}
      />
    </div>
  </div>
)

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App
