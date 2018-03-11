import React from 'react';
import Navbar from '../containers/Navbar';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { loggedIn } from '../../actions/UserActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends React.Component {
  componentDidMount(){
    this.props.loggedIn()
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className="login-container">
          <div className="login-box">
            <div id="login-header">Login</div>
            <div id="login-form">
              <form method="post" action="/users/sign_in">
                <label for="email">Email</label><input type="email" name="user[email]" size="30" />
                <br />
                <label for="password">Password</label><input type="password" name="user[password]" size="30" />
                <br />
                <div id="submit-btn"><input type="submit" name="commit" value="Log in" data-disable-with="Log in" /></div>
              </form>
            </div>
            <div id="login-footer">
              Don't have an account yet? <a href="/sessions/new">Sign up today!</a>
            </div>
          </div>
        </div>
        
      </React.Fragment>
    )
  }

}

const mapStateToProps = (state) => {
  return ({
    signed_in: state.users.signed_in,
    email: state.users.email,
    first_name: state.users.first_name,
    last_name: state.users.last_name,
    user_location: state.users.user_location,
    twitter: state.users.twitter,
    id: state.users.id,
    picture: state.users.picture,
    headshot: state.users.headshot
  })
}

export default connect(mapStateToProps, { loggedIn })(Login);
