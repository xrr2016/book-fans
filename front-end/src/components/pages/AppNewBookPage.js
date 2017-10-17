import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Segment, Header } from 'semantic-ui-react'
import AppSearchBookForm from '../forms/AppSearchBookForm'

export class AppNewBookPage extends Component {
  static propTypes = {
    prop: PropTypes
  }

  state = {
    book: null
  }

  render() {
    return (
      <Segment>
        <Header block as="h3">收藏一本书</Header>
        <AppSearchBookForm />
      </Segment>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNewBookPage)
