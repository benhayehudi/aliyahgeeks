import React from 'react';
import Header from '../../header/components/Header';
import Navbar from '../../navbar/components/Navbar';
import Footer from '../../footer/components/Footer';

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navbar />

        <div className="login-container">
          <div className="login-box">
            <div id="login-header">Login</div>
            <div id="login-form">
              <form method="post" action="user/login">
                <label for="email">Email</label><input type="email" name="email" size="30" />
                <br />
                <label for="password">Password</label><input type="password" name="password" size="30" />
                <br />
                <div id="submit-btn"><input type="submit" name="submit" /></div>
              </form>
            </div>
            <div id="login-footer">
              Don't have an account yet? <a href="/user/new">Sign up today!</a>
            </div>
          </div>
        </div>
        
        <Footer />
      </React.Fragment>
    )
  }

}
export default Login