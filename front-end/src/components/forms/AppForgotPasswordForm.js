import React, { Component } from 'react'
import { isEmail } from 'validator'
import PropTypes from 'prop-types'
import { Form, Button, Message } from 'semantic-ui-react'
import AppInlineError from '../messages/AppInlineError'

class AppForgotPasswordForm extends Component {
  state = {
    data: {
      email: ''
    },
    loading: false,
    errors: {}
  }

  onChange = e =>
    this.setState({
      errors: {},
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })

  onSubmit = e => {
    e.preventDefault()
    const errors = this.validte(this.state.data)
    this.setState({ errors })
    if (!Object.keys(errors).length) {
      this.setState({ loading: true })
      this.props.submit(this.state.data).catch(err =>
        this.setState({
          errors: err.response.data.errors,
          loading: false
        })
      )
    }
  }

  validte = data => {
    const errors = {}
    if (!isEmail(data.email)) errors.email = '无效的邮箱地址。'
    return errors
  }

  render() {
    const { data, errors, loading } = this.state
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {!!errors.global && <Message negative>{errors.global}</Message>}
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">你的邮箱地址</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <AppInlineError text={errors.email} />}
        </Form.Field>
        <Button floated="right" loading={loading} primary>
          发送重置密码邮件
        </Button>
      </Form>
    )
  }
}

AppForgotPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default AppForgotPasswordForm
