import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div id="align-left">
          <h1>AliyahGeeks</h1>
        </div>
        <div id="align-right">
          <h1>Share Your Story</h1>
          <h1>Your Profile</h1>
        </div>
      </div>
    )
  }
}

export default Header