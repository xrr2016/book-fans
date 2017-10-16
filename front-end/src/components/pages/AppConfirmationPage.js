import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Message, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { confirm } from '../../actions/auth'

class AppConfirmationPage extends Component {
  state = {
    loading: true,
    success: false,
    errors: null
  }

  componentDidMount() {
    this.props
      .confirm(this.props.match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(err =>
        this.setState({ loading: false, success: false, errors: err })
      )
  }

  render() {
    const { loading, success, errors } = this.state
    return (
      <div>
        {loading && (
          <Message icon>
            <Icon loading name="circle notched" />
            <Message.Header>请验证你的邮箱</Message.Header>
          </Message>
        )}
        {!loading &&
          success && (
            <Message success icon>
              <Icon name="checkmark" />
              <Message.Header>验证成功！</Message.Header>
              <Message.Content>
                <Link to="/dashboard">控制面板</Link>
              </Message.Content>
            </Message>
          )}
        {!loading &&
          !success && (
            <Message negative icon>
              <Icon name="warning sign" />
              <Message.Header>验证失败了!</Message.Header>
              <Message.Content>{errors.message}</Message.Content>
            </Message>
          )}
      </div>
    )
  }
}

AppConfirmationPage.propTypes = {
  confirm: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default connect(null, { confirm })(AppConfirmationPage)
