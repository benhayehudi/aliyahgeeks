import React from 'react';
import Navbar from '../containers/Navbar';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { loggedIn } from '../../actions/UserActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ResetPassword extends React.Component {
  componentDidMount(){
    this.props.loggedIn();

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-116467756-1');
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className="login-container">
          <div className="login-box">
            <div id="login-header">Reset Password</div>
            <div id="login-form">
              <form method="post" action="/users/password">
                <label htmlFor="email">Email</label><input type="email" name="user[email]" id="user_email" size="30" />
                <br />
                <div id="submit-btn"><input type="submit" name="commit" value="Send Me Reset Password Instructions" data-disable-with="Log in" /></div>
              </form>
            </div>
            <div id="login-footer">
              Don't have an account? <a href="/sessions/new">Sign up today!</a>
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

export default connect(mapStateToProps, { loggedIn })(ResetPassword);
