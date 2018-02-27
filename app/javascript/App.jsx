import React from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import Home from './components/home/Home';
import Footer from './components/containers/Footer';
import Header from './components/containers/Header';
import Navbar from './components/containers/Navbar';
import Dashboard from './components/user/Dashboard';
import EditProfile from './components/user/EditProfile';
import WritePost from './components/posts/WritePost';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
// import axios from 'axios';
import { loggedIn } from './actions/UserActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



const ReactRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/user/dashboard/:id' component={Dashboard} />
      <Route exact path='/user/edit/:id'  component={EditProfile} />
      <Route exact path='/user/login' component={Login} />
      <Route exact path='/sessions/new' component={Signup} />
      <Route exact path='/posts/new' component={WritePost} />
    </Switch>
  </Router>
)

class App extends React.Component {
  componentDidMount(){
    this.props.loggedIn()
    }

  render() {
      return (
        <React.Fragment>
          <Header />
          <ReactRouter />
          <Footer />
        </React.Fragment>
      )
    }
  }

  const mapStateToProps = (state) => {
    return ({
      signed_in: state.signed_in,
      email: state.email,
      first_name: state.first_name,
      last_name: state.last_name,
      location: state.location,
      twitter: state.twitter,
      id: state.id
    })
  }

export default connect(mapStateToProps, { loggedIn })(App);
