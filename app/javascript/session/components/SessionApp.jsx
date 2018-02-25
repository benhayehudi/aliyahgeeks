import React from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

const App = (props) => (
  <Router>
    <Switch>
      <Route path='/user/login' component={Login} />
      <Route path='/user/new' component={Signup} />
      <Route path='/user/dashboard' component={Dashboard} />
    </Switch>
  </Router>
)

export default App