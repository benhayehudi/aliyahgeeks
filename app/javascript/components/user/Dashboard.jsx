import React from 'react';
import Navbar from '../containers/Navbar';
import { loggedIn } from '../../actions/UserActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  componentDidMount(){
    this.props.loggedIn()
  }
  render() {
    console.log("dashboard!")
    return (
      <React.Fragment>
        <Navbar />

        <div className="body-container">

          <div className="dashboard-header">
            <div id="dashboard-user-pic">
              <img src={this.props.signed_in && this.props.headshot ? this.props.headshot : "/assets/default-author-headshot.png"} alt="default headshot" />
            </div>
            <div id="dashboard-user-details">
              <div id="dashboard-user-name">{this.props.signed_in && this.props.first_name && this.props.last_name ? this.props.first_name + " " + this.props.last_name : "Ploni Almoni"}</div>
              <div id="dashboard-edit-profile-link"><button className="dashboard-edit-profile-button"><a href={"/user/edit/" +this.props.id}>Edit Profile</a></button></div>
              <br />
              <span id="dashboard-user-twitter"><img src="/assets/icons/twitter-icon.png" /><a href={"https://www.twitter.com/" +this.props.twitter}>{"@" + this.props.twitter}</a></span>
              <span id="dashboard-user-email"><a href={"mailto:" + this.props.email}><img src="/assets/icons/email-icon.png" />{this.props.email}</a></span>
            </div>
         </div>
        

          <div className="post-snippet-container">
            <div id="post-snippet-title">The Sky Is Blue In Modiin</div>
            <div id="post-snippet-author-container">
              <div id="post-snippet-author-headshot"><img src="/assets/default-author-headshot.png" alt="default headshot" />Ploni Almoni</div>
            </div>
            <div className="post-snippet-footer">
              <div id="post-snippet-tags">
                <p><span>#aliyah</span> <span>#hebrew</span> <span>#modiin</span></p>
              </div>
              <div id="post-snippet-links">
                <span id="post-snippet-heart">&hearts;4</span>
                <span id="post-snippet-comment">✍ 12</span>
              </div>
            </div>
          </div>
        </div>
        
      </React.Fragment>
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
    headshot: state.users.headshot
  })
}

export default connect(mapStateToProps, { loggedIn })(Dashboard);