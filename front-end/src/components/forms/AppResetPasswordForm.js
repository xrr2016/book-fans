import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Message } from 'semantic-ui-react'
import AppInlineError from '../messages/AppInlineError'

class AppResetPasswordForm extends Component {
  state = {
    data: {
      token: this.props.token,
      password: '',
      repeatPassword: ''
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
      this.props.submit(this.state.data)
    }
  }

  validte = data => {
    const errors = {}
    if (!data.password) errors.password = '密码不能为空'
    if (data.password !== data.repeatPassword) errors.password = '两次密码必须相同'
    return errors
  }

  render() {
    const { data, errors, loading } = this.state
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {!!errors.global && <Message negative>{errors.global}</Message>}
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">新的密码</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="你的新密码"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <AppInlineError text={errors.password} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="repeatPassword">重复你的新密码</label>
          <input
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            placeholder="你的新密码"
            value={data.repeatPassword}
            onChange={this.onChange}
          />
          {errors.password && <AppInlineError text={errors.password} />}
        </Form.Field>
        <Button floated="right" loading={loading} primary>
          重置密码
        </Button>
      </Form>
    )
  }
}

AppResetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
}

export default AppResetPasswordForm
