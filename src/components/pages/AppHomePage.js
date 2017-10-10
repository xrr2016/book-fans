import React from 'react';
import { Link } from 'react-router-dom';

const AppHomePage = () => (
  <div>
    <h1>App Home Page</h1>
    <Link to="/login">Login</Link>
  </div>
)

export default AppHomePage