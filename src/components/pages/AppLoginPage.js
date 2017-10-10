import React, { Component } from 'react'
import AppLoginForm from '../forms/AppLoginForm'

class AppLoginPage extends Component {
  
  submit = (data) => {
    console.log(data)
  }

  render () {
    return (
      <div>
        <h1>App Login Page</h1>
        <AppLoginForm  submit={this.submit} />
      </div>
    )
  }
 
}

export default AppLoginPage