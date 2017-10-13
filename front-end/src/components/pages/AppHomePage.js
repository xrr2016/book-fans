import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { logout } from '../../actions/auth'

const AppHomePage = ({ isAuthenticated, logout }) => (
  <div>
    {isAuthenticated ? (
      <Button color="grey" onClick={() => logout()}>
        注销
      </Button>
    ) : (
      <div>
        <Link to="/login">登录</Link> OR <Link to="/signup">注册</Link>
      </div>
    )}
  </div>
)

AppHomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

function mapState(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapState, { logout })(AppHomePage)
