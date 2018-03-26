import React from 'react';
import Navbar from '../containers/Navbar';

class Signup extends React.Component {
  componentDidMount() {
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
            <div id="login-header">Sign Up</div>
            <div id="login-form">
              <form method="post" action="/users" autocomplete="on">
                <label for="first_name">First Name</label><input type="text" name="user[first_name]" size="20" required />
                <br />
                <label for="last_name">Last Name</label><input type="text" name="user[last_name]" size="20" required />
                <br />
                <label for="email">Email</label><input type="email" name="user[email]" id="user_email" autocomplete="email" size="20" required />
                <br />
                <label for="password">Password</label><input type="password" name="user[password]" id="user_password" size="20" required />
                <br />
                <div id="submit-btn"><input type="submit" name="submit" /></div>
              </form>
            </div>
            <div id="login-footer">
              Already have an account? <a href="/user/login">Login!</a>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }

}
export default Signup