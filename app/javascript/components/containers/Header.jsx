import React from 'react';
import { loggedIn } from '../../actions/UserActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Header extends React.Component {
  componentDidMount(){
    this.props.loggedIn()
  }
  render() {
    return (
      <div className="header-container">
        <div id="align-left">
          <a href="/"><h1><span id="title-firsthalf">Rechov</span><span id="title-secondhalf">Aliyah</span><img src="/assets/icons/israel-flag-icon.png" /></h1></a>
        </div>
        <div id="align-right">
    <div className="btn">{this.props.signed_in ? <a href="/posts/new">Share Your Story</a> : <a href="/user/login">Share Your Story</a>}</div>
          <br/>
          {
            this.props.signed_in 
            
            ? 

            <div className="header-dropdown">
              <div id="header-headshot-img"><a href={"/user/edit/" + this.props.id}><img src={this.props.headshot}/></a>
            </div>            
            <div className="header-dropdown-content">
              <a href="/posts/new">Write A Post</a>
              <a href={"/user/dashboard/" +this.props.id}>Your Dashboard</a>
              <a href={"/user/edit/" +this.props.id}>Edit Profile</a>
              <a href="/users/sign_out">Logout</a>
            </div>
            </div>
               
            :

            <div className="btn"><a href="/user/login">Login</a></div>
          }
        </div>
      </div>
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

export default connect(mapStateToProps, { loggedIn })(Header);