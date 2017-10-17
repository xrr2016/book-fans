import React from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import AppHomePage from './components/pages/AppHomePage'
import AppConfirmationPage from './components/pages/AppConfirmationPage'
import AppLoginPage from './components/pages/AppLoginPage'
import AppSignupPage from './components/pages/AppSignupPage'
import AppForgotPassword from './components/pages/AppForgotPassword'
import AppResetPassword from './components/pages/AppResetPassword'
import AppDashboard from './components/pages/AppDashboard'
import AppUserRoute from './components/routes/AppUserRoute'
import AppGuestRoute from './components/routes/AppGuestRoute'

const App = ({ location }) => (
  <div>
    <div className="ui fixed inverted menu" style={{ height: 56 }}>
      <div className="ui container">
        <Link to="/" className="header item">
          主页
        </Link>
      </div>
    </div>
    <div className="ui main text container" style={{ marginTop: '7em' }}>
      <Route location={location} path="/" exact component={AppHomePage} />
      <Route
        location={location}
        path="/comfirmation/:token"
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
      <AppGuestRoute
        location={location}
        path="/signup"
        exact
        component={AppSignupPage}
      />
      <AppGuestRoute
        location={location}
        path="/forgot_password"
        exact
        component={AppForgotPassword}
      />
      <AppGuestRoute
        location={location}
        path="/reset_password/:token"
        exact
        component={AppResetPassword}
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
