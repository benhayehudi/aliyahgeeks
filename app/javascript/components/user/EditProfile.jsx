import React from 'react';
import Navbar from '../containers/Navbar';
import { loggedIn } from '../../actions/UserActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = (this.props)

   this.handleOnChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }
  componentDidMount(){
    this.props.loggedIn()
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps) 
      this.setState({
        first_name: nextProps.first_name,
        last_name: nextProps.last_name,
        email: nextProps.email,
        user_location: nextProps.user_location,
        headshot: nextProps.headshot,
        twitter: nextProps.twitter
      })
  }
  render() {  
    console.log(this.state.email)
    return (
      <React.Fragment>
        <Navbar />

        <div className="login-container">
          <div className="edit-profile-box">
            <div id="login-header">Edit Profile</div>
            <div id="login-form">
              <form method="post" encType="multipart/form-data" action={"/user/edit/" + this.props.id}>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  name="[user]email" 
                  size="30" 
                  onChange={this.handleOnChange}
                  value={this.props.email}
                />
                <br />
                <label htmlFor="first_name">First Name</label>
                <input 
                  type="text" 
                  name="[user]first_name" 
                  onChange={this.handleOnChange}
                  defaultValue={this.state.first_name !== undefined && this.state.first_name.length !== 0 ? this.state.first_name : this.state.first_name}
                  size="30" 
                />
                <br />
                <label htmlFor="last_name">Last Name</label>
                <input 
                  type="text" 
                  name="[user]last_name" 
                  onChange={this.handleOnChange}
                  defaultValue={this.state.last_name !== undefined && this.state.last_name.length !== 0 ? this.state.last_name : this.state.last_name}
                  size="30" 
                />
                <br />
                <img id="edit_profile_img" src={this.props.headshot ? this.props.headshot : "/assets/default-author-headshot.png"} /><input type="file" name="[user]image" />
                <br />
                <label htmlFor="twitter">Twitter Username</label>
                <input 
                  type="text" 
                  name="[user]twtter" 
                  onChange={this.handleOnChange}
                  defaultValue={this.state.twitter !== undefined && this.state.twitter !== null && this.state.twitter.length !== 0 ? this.state.twitter : this.state.twitter} 
                  size="30" 
                />
                <br />
                <label htmlFor="location">Location</label>
                <input 
                  type="text" 
                  name="[user]location" 
                  onChange={this.handleOnChange}
                  defaultValue={this.state.user_location !== undefined && this.state.user_location !== null && this.state.user_location.length !== 0 ? this.state.user_location : this.state.user_location} 
                  size="30" 
                />
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

export default connect(mapStateToProps, { loggedIn })(EditProfile);
