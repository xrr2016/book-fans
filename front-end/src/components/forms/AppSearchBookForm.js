import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AppSearchBookForm extends Component {
  static propTypes = {
    prop: PropTypes
  }

  state = {
    query: '',
    loading: false,
    options: [{
      key: 1,
      value: 1,
      text: 'first book'
    },{
      key: 2,
      value: 2,
      text: 'second book'
    }],
    books: {}
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
