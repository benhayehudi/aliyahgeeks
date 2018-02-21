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
        <div className="navbar-item navbar-sponsors">
          <span id="sponsors-heading"><span id="heart">&hearts;</span>Sponsors<span id="heart">&hearts;</span></span>
          <div id="navbar-sponsor-img"><img src="/assets/sponsors-wanted.png" alt="sponsor wanted" /></div>
          <div id="navbar-sponsor-lead">
            Want to support a new initiative for the English speaking Aliyah community? Looking to reach an Anglo audience interested in all things Israel? Consider becoming a sponsor of Rechov Aliyah today!
          </div>
        </div>
        <div className="navbar-item navbar-links">
          <span id="links-heading">Get Around</span>
          <span id="link-item">About</span>
          <span id="link-item">Sponsors</span>
          <span id="link-item">Shop Rechov Aliyah</span>
          <span id="link-item">Privacy Policy</span>
          <span id="link-item">Terms of Use</span>
          <span id="link-item">Code of Conduct</span>
          <span id="link-item">Contact</span>
        </div>
      </div>
    )
  }
}
export default Navbar