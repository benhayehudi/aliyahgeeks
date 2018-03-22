import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container">
          <div className="post-title">
            <div id="login-header">Contact</div>
            <div id="contact-body">
              <h1>Get In Touch With Rechov Aliyah</h1>
              Facebook: <a href="https://www.facebook.com/rechovaliyah" target="_new">facebook.com/rechovaliyah</a>
              <br />
              Twitter: <a href="https://www.twitter.com/rechovaliyah" target="_new">twitter.com/rechovaliyah</a>
              <br />
              Email: <a href="mailto:ben@rechovaliyah.com">ben@rechovaliyah.com</a>
            </div>
          </div>
        </div>
    )
  }
}
export default Contact;