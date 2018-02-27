import React from 'react';
import Navbar from '../containers/Navbar';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     currentUser: null,
  //     first_name: null,
  //     last_name: null,
  //     location: null,
  //     twitter: null,
  //     signed_in: false,
  //     picture: null

  //   }
  //   this.handleSignup = this.handleSignup.bind(this);
  // }
  // handleSignup(e) {
  //   e.preventDefault();
  //   let that = this
  //   axios.post('/users/sign_in', {
  //     user: {
  //       email: document.getElementById("email").value,
  //       password: document.getElementById("password").value,
  //     }
  //   })
  //   .then(function(response){
  //     that.props.loggedIn;
  //   })
  //   .catch(function(error){
  //     console.log(error)
  //   })
  // }
  // loggedIn() {
  //   this.setState({
  //     signed_in: true,
  //     currentUser: response.data.email,
  //     first_name: response.data.first_name,
  //     last_name: response.data.last_name,
  //     location: response.data.location,
  //     twitter: response.data.twitter,
  //     picture: response.data.picture,
  //     id: response.data.id

  //   })
  // }
  render() {
    console.log("loginsl")
    return (
      <React.Fragment>
        <Navbar />

        <div className="login-container">
          <div className="login-box">
            <div id="login-header">Login</div>
            <div id="login-form">
              <form method="post" action="/users/sign_in">
                <label for="email">Email</label><input type="email" name="email" size="30" />
                <br />
                <label for="password">Password</label><input type="password" name="encrytped_password" size="30" />
                <br />
                <div id="submit-btn"><input type="submit" name="submit" onClick={this.handleSignup} /></div>
              </form>
            </div>
            <div id="login-footer">
              Don't have an account yet? <a href="/user/new">Sign up today!</a>
            </div>
          </div>
        </div>
        
      </React.Fragment>
    )
  }

}
export default Login