import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Login from './Login';

const App = (props) => (
  <Router>
    <Route path='/user/login' component={Login} />
  </Router>
)

export default App