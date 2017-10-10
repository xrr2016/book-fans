import React from 'react';
import { Route } from 'react-router-dom';
import AppHomePage from './components/pages/AppHomePage'
import AppLoginPage from './components/pages/AppLoginPage'

const App = () => (
  <div>
    <Route path="/" exact component={AppHomePage} />
    <Route path="/login" exact component={AppLoginPage} />
  </div>
)

export default App;
