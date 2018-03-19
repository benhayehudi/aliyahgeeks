import React from 'react';
import { loggedIn } from '../../actions/UserActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  componentDidMount(){
    this.props.loggedIn()
  }
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-item navbar-profile-link">
          <div id="navbar-profile-img"><img src={this.props.headshot ? this.props.headshot : "/assets/default-author-headshot.png"} alt="default headshot" /></div>
          <div id="navbar-profile-info">{this.props.signed_in && this.props.first_name && this.props.last_name ? this.props.first_name + " " + this.props.last_name : "Ploni Almoni"}<br />
          {
            ( this.props.signed_in && this.props.twitter) ? 
              <a href={"/user/dashboard/" +this.props.id}>{"@" + this.props.twitter}</a>
            : 
              <a href={"/user/dashboard/" +this.props.id}>@plonialmoni</a>
          }
          </div>
        </div>
        <div className="navbar-item navbar-bookmark">
          <div id="navbar-bookmark-img"><img src="/assets/icons/bookmark-icon.png" alt="bookmark icon" /></div>
          <div id="navbar-bookmark-title">My Bookmarks <span id="bookmark-count">({this.props.bookmark_count})</span></div>
        </div>
        <div className="navbar-item navbar-sponsors">
          <span id="sponsors-heading"><span id="heart">&hearts;</span>Sponsors<span id="heart">&hearts;</span></span>
          <div id="navbar-sponsor-img"><img src="/assets/sponsors-wanted.png" alt="sponsor wanted" /></div>
          <div id="navbar-sponsor-lead">
            Looking to reach an English speaking audience interested in all things Israel? Consider becoming a sponsor today!
          </div>
        </div>
        <div className="navbar-item navbar-links">
          <span id="links-heading">Get Around</span>
          <span id="link-item"><a href="/about">About</a></span>
          <span id="link-item">Sponsors</span>
          <span id="link-item"><a href="/privacy">Privacy Policy</a></span>
          <span id="link-item"><a href="/terms">Terms of Use</a></span>
          <span id="link-item">Code of Conduct</span>
          <span id="link-item">Contact</span>
        </div>
      </div>
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
    headshot: state.users.headshot,
    bookmark_count: state.users.bookmark_count
  })
}

export default connect(mapStateToProps, { loggedIn })(Navbar);
