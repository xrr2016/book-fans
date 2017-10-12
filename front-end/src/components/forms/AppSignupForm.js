import React, { Component } from 'react'
import { isEmail } from 'validator'
import PropTypes from 'prop-types'
import { Form, Button, Message } from 'semantic-ui-react'
import AppInlineError from '../messages/AppInlineError'

class AppSignupForm extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  }

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

  onChange = e =>
    this.setState({
      errors: {},
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })

  validte = data => {
    const errors = {}
    if (!isEmail(data.email)) errors.email = '请提供有效的邮箱地址。'
    if (!data.password) errors.password = '密码不能为空。'
    return errors
  }

  render() {
    const { data, loading, errors } = this.state

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && (
          <Message negative>
            <Message.Header>出现了不可描述的错误！</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="请输入你的邮箱"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <AppInlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="请输入你的密码"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <AppInlineError text={errors.password} />}
        </Form.Field>
        <Button floated="right" primary loading={loading}>
          注册
        </Button>
      </Form>
    )
  }
}

AppSignupForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default AppSignupForm
