import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppHomePage from './components/pages/AppHomePage'
import AppLoginPage from './components/pages/AppLoginPage'
import AppSignupPage from './components/pages/AppSignupPage'
import AppDashboard from './components/pages/AppDashboard'
import AppUserRoute from './components/routes/AppUserRoute'
import AppGuestRoute from './components/routes/AppGuestRoute'

const App = ({ location }) => (
  <div className="ui container">
    <Route location={location} path="/" exact component={AppHomePage} />
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
)

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App
