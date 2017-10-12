import React from 'react';
import PropTypes from 'prop-types';

const AppInlineError = ({ text }) => 
  <span style={{ color: '#912d2b' }}>{ text }</span>

AppInlineError.prototype = {
  text: PropTypes.string.isRequired
}

export default AppInlineError