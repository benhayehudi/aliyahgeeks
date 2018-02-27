import React from 'react';
import Navbar from '../containers/Navbar';
import { loggedIn } from '../../actions/UserActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class EditProfile extends React.Component {
  componentDidMount(){
    this.props.loggedIn()
  }
  render() {  
    console.log("edit")
    return (
      <React.Fragment>
        <Navbar />

        <div className="login-container">
          <div className="edit-profile-box">
            <div id="login-header">Edit Profile</div>
            <div id="login-form">
              <form method="post" enctype="multipart/form-data" action={"/user/edit/" + this.props.id}>
                <label for="email">Email</label><input type="email" name="[user]email" size="30" value={this.props.email}/>
                <br />
                <label htmlFor="first_name">First Name</label><input type="text" name="[user]first_name" value={this.props.first_name} size="30" />
                <br />
                <label htmlFor="last_name">Last Name</label><input type="text" name="[user]last_name" value={this.props.last_name} size="30" />
                <br />
                <img id="edit_profile_img" src={this.props.headshot ? this.props.headshot : "/assets/default-author-headshot.png"} /><input type="file" name="[user]image" />
                <br />
                <label htmlFor="twitter">Twitter Username</label><input type="text" name="[user]twtter" value={this.props.twitter} size="30" />
                <br />
                <label htmlFor="location">Location</label><input type="text" name="[user]location" value={this.props.user_location} size="30" />
                <br />
                <div id="submit-btn"><input type="submit" name="submit" /></div>
              </form>
            </div>
          </div>
        </div>
        
      </React.Fragment>
    )
  }

}

const mapStateToProps = (state) => {
  return ({
    signed_in: state.signed_in,
    email: state.email,
    first_name: state.first_name,
    last_name: state.last_name,
    user_location: state.user_location,
    twitter: state.twitter,
    id: state.id,
    picture: state.picture,
    headshot: state.headshot
  })
}

export default connect(mapStateToProps, { loggedIn })(EditProfile);
