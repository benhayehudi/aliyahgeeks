import React from 'react';
import Navbar from '../containers/Navbar';
import DashboardLoadingBox from '../containers/DashboardLoadingBox';
import { loggedIn } from '../../actions/UserActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserPosts } from '../../actions/BlogPostActions';
import PostSnippetCard from '../containers/PostSnippetCard';


class Dashboard extends React.Component {
  componentDidMount(){
    this.props.loggedIn();
    this.props.getUserPosts();
  }
  render() {
    let loadedPosts = 
    this.props.posts !== undefined && this.props.posts.length !== 0 ?
      this.props.posts.posts : null
    const renderedPosts = 
      this.props.posts !== undefined && this.props.posts.length !== 0 ?
      loadedPosts.map(post => <PostSnippetCard post={post} key={post.id}/>) : <DashboardLoadingBox />

      const renderedBookmarks =
        this.props.bookmarks !== undefined && this.props.bookmarks.length !== 0 ?
          this.props.bookmarks.map(post => post.map(postDetails => 
            <PostSnippetCard post={postDetails} key={post.id}/>)) : <DashboardLoadingBox />
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
        
         <div id="dashboard-user-name">My Posts</div>
          <div className="dashboard-post-container">
            {renderedPosts}
          </div>

        <div id="dashboard-user-name" name="dashboard-bookmarks">My Bookmarks</div>
        <div className="dashboard-post-container">
            {renderedBookmarks}
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
    headshot: state.users.headshot,
    posts: state.posts.posts,
    bookmarks: state.users.bookmarks
  })
}

export default connect(mapStateToProps, { loggedIn, getUserPosts })(Dashboard);