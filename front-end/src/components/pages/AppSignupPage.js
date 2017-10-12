import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppSignupForm from '../forms/AppSignupForm'
import { signup } from '../../actions/user'

class AppSignupPage extends Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push('/dashboard'))

  render() {
    return (
      <div>
        <h1>用户注册</h1>
        <AppSignupForm submit={this.submit} />
      </div>
    )
  }
}

AppSignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
}

export default connect(null, { signup })(AppSignupPage)
