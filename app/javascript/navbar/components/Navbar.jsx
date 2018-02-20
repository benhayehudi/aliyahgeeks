import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-item navbar-profile-link">
          <div id="navbar-profile-img"><img src="/assets/default-author-headshot.png" alt="default headshot" /></div>
          <div id="navbar-profile-info">Ploni Almoni<br />@plonialmoni</div>
        </div>
        <div className="navbar-item navbar-bookmark">
          <div id="navbar-bookmark-img"><img src="/assets/icons/bookmark-icon.png" alt="bookmark icon" /></div>
          <div id="navbar-profile-info">My Bookmarks</div>
        </div>
        <div className="navbar-item">
          <h1>navbar item</h1>
        </div>
        <div className="navbar-item">
          <h1>navbar item</h1>
        </div>
      </div>
    )
  }
}
export default Navbar