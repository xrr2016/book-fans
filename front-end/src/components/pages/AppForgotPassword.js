import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { resetPasswordResquest } from '../../actions/auth'
import AppForgotPasswordForm from '../forms/AppForgotPasswordForm'

class AppForgotPassword extends Component {
  state = {
    success: false
  }

  submit = data =>
    this.props
      .resetPasswordResquest(data)
      .then(() => this.setState({ success: true }))

  render() {
    const { success } = this.state
    return (
      <div>
        {success ? (
          <Message>邮件已经发出, 请去你的邮箱查看</Message>
        ) : (
          <AppForgotPasswordForm submit={this.submit} />
        )}
      </div>
    )
  }
}

export default connect(null, { resetPasswordResquest })(AppForgotPassword)
