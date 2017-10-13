import React, { Component } from 'react'
import { Message, Icon } from 'semantic-ui-react'

class AppConfirmationPage extends Component {
  state = {
    loading: true,
    success: false
  }

  render() {
    const { loading, success } = this.state
    return (
      <div>
        {loading && (
          <Message icon>
            <Icon />
          </Message>
        )}
      </div>
    )
  }
}

export default AppConfirmationPage
