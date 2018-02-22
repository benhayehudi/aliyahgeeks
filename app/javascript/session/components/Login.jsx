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
            <div id="login-header">I'm the header</div>
            <div id="login-form">I'm the form</div>
            <div id="login-footer">I'm the create an account link</div>
          </div>
        </div>
        
        <Footer />
      </React.Fragment>
    )
  }

}
export default Login