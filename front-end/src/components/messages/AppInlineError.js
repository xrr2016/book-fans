import React from 'react';
import PropTypes from 'prop-types';
// import { Message } from 'semantic-ui-react'

const AppInlineError = ({ text }) => 
  // <Message color='red'>{ text }</Message>
  <span style={{ color: '#912d2b' }}>{ text }</span>

AppInlineError.prototype = {
  text: PropTypes.string.isRequired
}

export default AppInlineError