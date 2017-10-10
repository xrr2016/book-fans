import React, { Component } from 'react';
import validator from 'validator';
import PropTypes from 'prop-types'
import { Form, Button } from 'semantic-ui-react'
import AppInlineError from '../messages/AppInlineError';

class AppLoginForm extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  }

  onChange = e => 
    this.setState({
      errors: {},
      data: {...this.state.data, [e.target.name]: e.target.value }
    })
  
  onSubmit = e => {
    e.preventDefault()
    const errors = this.validte(this.state.data)
    this.setState({ errors })
    if (!Object.keys(errors).length) {
      this.props.submit(this.state.data)
    }
  }

  validte = (data) => {
    const errors = {}
    if (!validator.isEmail(data.email)) errors.email = '无效的邮箱地址。'
    if (!data.password) errors.password = '密码不能为空。'
    return errors
  }

  render () {
    const { data, errors } = this.state
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
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
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            name="password" 
            id="password" 
            placeholder="your password" 
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <AppInlineError text={errors.password} />}
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    )
  }
}

AppLoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default AppLoginForm

