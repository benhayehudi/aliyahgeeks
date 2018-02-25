import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div id="align-left">
          <a href="/"><h1><span id="title-firsthalf">Rechov</span><span id="title-secondhalf">Aliyah</span><img src="/assets/icons/israel-flag-icon.png" /></h1></a>
        </div>
        <div id="align-right">
          <div className="btn"><a href="/posts/new">Share Your Story</a></div><br/>
          <div className="btn"><a href="/user/login">Login</a></div>
        </div>
      </div>
    )
  }
}

export default Header