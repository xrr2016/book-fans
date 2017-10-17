import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import AppLoginForm from '../forms/AppLoginForm'
import { login } from '../../actions/auth'

class AppLoginPage extends Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push('/dashboard'))

  render() {
    return (
      <div>
        <h1>用户登录</h1>
        <AppLoginForm submit={this.submit} />
        <Link to="/forgot_password">忘记密码？</Link>
      </div>
    )
  }
}

AppLoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
}

export default connect(null, { login })(AppLoginPage)
