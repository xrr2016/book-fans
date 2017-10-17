import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { validateToken, resetPassword } from '../../actions/auth'
import AppResetPasswordForm from '../forms/AppResetPasswordForm'

class AppResetPassword extends Component {
  static propTypes = {
    validateToken: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        token: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    resetPassword: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  }

  state = {
    loading: true,
    success: false
  }

  componentDidMount = () => {
    this.props
      .validateToken(this.props.match.params.token)
      .then(res => this.setState({ loading: false, success: true }))
      .catch(err => this.setState({ loading: false, success: false }))
  }

  submit = data => {
    this.props.resetPassword(data).then(() => {
      this.props.history.push('/login')
    })
  }

  render() {
    const { loading, success } = this.state
    const token = this.props.match.params.token
    return (
      <div>
        {loading && <Message>loading</Message>}
        {!loading &&
          success && (
            <AppResetPasswordForm submit={this.submit} token={token} />
          )}
        {!loading && !success && <Message>非法的 Token</Message>}
      </div>
    )
  }
}

export default connect(null, { validateToken, resetPassword })(AppResetPassword)
