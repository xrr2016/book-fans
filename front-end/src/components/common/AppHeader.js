import React from 'react'

const AppHeader = ({ name }) => (
  <div className="ui fixed inverted menu">
    <div className="ui container">
      <span className="header item">
        <img
          className="logo"
          src="../../../assets/images/book.png"
          alt="Bookfnas"
        />
        {name}
      </span>
    </div>
  </div>
)

export default AppHeader
