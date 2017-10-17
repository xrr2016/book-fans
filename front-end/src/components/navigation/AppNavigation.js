import React from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import gravatarUrl from 'gravatar-url'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'

const AppNavigation = ({ user, logout }) => (
  <Menu secondary pointing>
    <Menu.Item as={Link} to="/dashboard">
      控制台
    </Menu.Item>

    <Menu.Menu position="right">
      <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => logout()}>注销</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
)

AppNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired
}

function mapState(state) {
  return {
    user: state.user
  }
}

export default connect(mapState, { logout })(AppNavigation)
