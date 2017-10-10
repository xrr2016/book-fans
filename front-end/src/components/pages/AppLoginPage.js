import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppLoginForm from '../forms/AppLoginForm'
import { login } from '../../actions/auth'

class AppLoginPage extends Component {
  
  submit = (data) => 
    this.props.login(data).then(() => this.props.history.push('/'))

  render () {
    return (
      <div>
        <h1>App Login Page</h1>
        <AppLoginForm  submit={this.submit} />
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


