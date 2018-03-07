import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../../actions/UserActions';
import { getPost } from '../../actions/BlogPostActions';
import { addHeartCount, addStarCount, addHandCount } from '../../functions/PostLikeActions';
import { convertToRaw, convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import $ from 'jquery';

class ViewPost extends React.Component {
  componentDidMount(){
    this.props.loggedIn();
    this.props.getPost();
  }

  render() {
   
    // Setup the rendering of the post body from editorState
    let html = 
      this.props.post !== undefined && this.props.post.length !== 0 ?
        stateToHTML(this.props.editorState.getCurrentContent()) : null
    // set function to render the html without escaping the tags
    function createMarkup() {
      return {__html: html};
    }

    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date = this.props.post !== undefined && this.props.post.length !== 0 ?
      new Date(this.props.post.post.created_at) : null
    
    return (
      <React.Fragment>
        {
          this.props.post !== undefined && this.props.post.length !== 0  
        ?
        <div className="post-container">
            <div id="post-title">
              <h1>{this.props.post.post.title}</h1>
            </div>
            <div id="author-info">
              <h2>
                <span id="author-img">
                  <img src={"/assets/headshots/" + this.props.post.author.image_file_name} />
                </span>
                {this.props.post.author.first_name + ' ' + this.props.post.author.last_name}
                <span id="post-author-twitter"><a href={"https://www.twitter.com/" + this.props.post.author.twtter}><img src="/assets/icons/twitter-icon.png" /></a></span>
                {date.toLocaleDateString("en-US",dateOptions)}
              </h2>
            </div>
            <div id="tag-info">
            {"#"+this.props.post.post.tags}
            </div>
            <div id="post-img">
              <img src={this.props.post.image_file_name ? "/assets/post_pictures/" + this.props.post.image_file_name : "/assets/post_pictures/default-post-img.png"} />
            </div>
            <div id="post-body" dangerouslySetInnerHTML={createMarkup()}></div>
            <div id="post-actions">
              <button id="button-heart" data-type="hearts" onClick={() => this.props.addHeartCount()}>
                <img src="/assets/icons/heart-icon.jpeg" />
                <span id="like-number">{this.props.hearts}</span>
              </button> 
              <button id="button-star" data-type="stars" onClick={() => this.props.addStarCount()}>
                <img src="/assets/icons/star-icon.png" />
                <span id="like-number">{this.props.stars}</span>
              </button>
              <button id="button-hands" data-type="hands" onClick={() => this.props.addHandCount()}>
                <img src="/assets/icons/hands-icon.png" />
                <span id="like-number">{this.props.hands}</span>
              </button>
            </div>
        </div>
        :
        "Loading..."
        }
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    signed_in: state.users.signed_in,
    email: state.users.email,
    first_name: state.users.first_name,
    last_name: state.users.last_name,
    user_location: state.users.user_location,
    twitter: state.users.twitter,
    id: state.users.id,
    picture: state.users.picture,
    headshot: state.users.headshot,
    post: state.posts.current_post,
    stars: state.posts.likes,
    hearts: state.posts.hearts,
    hands: state.posts.hands,
    editorState: state.posts.editorState
  }
}
export default connect(mapStateToProps, { loggedIn, getPost, addHeartCount, addStarCount, addHandCount })(ViewPost)