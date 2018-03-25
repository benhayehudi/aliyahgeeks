import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../../actions/UserActions';
import { getPost, getLikes, addHeart, addStar, addHand, addBookmark } from '../../actions/BlogPostActions';
import { getAllComments, addComment } from '../../actions/CommentActions';
import CommentCard from '../containers/CommentCard';
import { convertToRaw, convertFromRaw } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import $ from 'jquery';

class ViewPost extends React.Component {
  constructor(props) {
    super(props)

    this.addUserComment = this.addUserComment.bind(this);
  }

  componentDidMount(){
    this.props.loggedIn();
    this.props.getPost();
    this.props.getLikes();
    this.props.getAllComments();
  }

  addHeartCount = () => {
    let postId = this.props.post.post.id 
    let userId = this.props.id
    let counter = 1
    this.props.addHeart(counter, postId, userId);
  }
  
  addStarCount() {
    let postId = this.props.post.post.id
    let userId = this.props.id
    let counter = 1
    this.props.addStar(counter, postId, userId);
  }
  
  addHandCount() {
    let postId = this.props.post.post.id
    let userId = this.props.id
    let counter = 1
    this.props.addHand(counter, postId, userId);
  }

  addUserBookmark() {
    let postId = this.props.post.post.id
    let userId = this.props.id
    this.props.addBookmark(postId, userId);
  }

  addUserComment(event) {
    event.preventDefault();
    let post_id = document.getElementById("comment-post-id").value
    let user_id = document.getElementById("comment-user-id").value
    let text = document.getElementById("text-area").value
    this.props.addComment(post_id, user_id, text);
  }

  render() {
    const renderedComments =
      this.props.comments.length !== 0 && this.props.comments !== undefined ? 
      this.props.comments.map(comment => <CommentCard id={comment[0].comment.id} comment={comment[0]} />) : "No comments yet on this post. Do you want to add to this conversation?"
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
            <div id="post-body" dangerouslySetInnerHTML={createMarkup()}></div>
            
            <div id="post-actions">
              <button id="button-heart" data-type="hearts" onClick={() => this.addHeartCount()}>
                <img src="/assets/icons/heart-icon.jpeg" />
                <span id="like-number">{this.props.post.post.postlike !== undefined && this.props.post.post.postlike.length !== 0 ? this.props.post.post.postlike.hearts : 0}</span>
              </button> 
              <button id="button-star" data-type="stars" onClick={() => this.addStarCount()}>
                <img src="/assets/icons/star-icon.png" />
                <span id="like-number">{this.props.post.post.postlike !== undefined && this.props.post.post.postlike.length !== 0 ? this.props.post.post.postlike.likes : 0}</span>
              </button>
              <button id="button-hands" data-type="hands" onClick={() => this.addHandCount()}>
                <img src="/assets/icons/hands-icon.png" />
                <span id="like-number">{this.props.post.post.postlike !== undefined && this.props.post.post.postlike.length !== 0 ? this.props.post.post.postlike.hands : 0}</span>
              </button>
              <button id="button-bookmark" onClick={() => this.addUserBookmark()}>
                <img src="/assets/icons/bookmark-icon-small.png" />
              </button> 
            </div>
            <div id="comments-container-container">
              { this.props.signed_in ? 
                <div id="comments-container">
                  <form className="new_comment" id="new_comment" onSubmit={this.addUserComment}>
                    <input type="hidden" name="user_id" id="comment-user-id" value={this.props.id} />
                    <input type="hidden" name="post_id" id="comment-post-id" value={this.props.post.post.id} />
                    <textarea placeholder="Contribute to this conversation" id="text-area" name="text" required="required"/>
                    <input type="submit" name="submit" value="Submit" id="submit-button" onClick={this.addUserComment} />
                  </form>
                </div>
              :
                <div id="comments-container">
                  <div id="post-title">Please login to share a comment</div>
                  <form method="post" action="/users/sign_in">
                    <label htmlFor="email">Email</label><input type="email" name="user[email]" size="30" />
                    <br />
                    <label htmlFor="password">Password</label><input type="password" name="user[password]" size="30" />
                    <br />
                    <div id="submit-btn"><input type="submit" name="commit" value="Log in" data-disable-with="Log in" /></div>
                  </form>
              </div>
              }
              <div id="single-comment">
                {renderedComments}
              </div>
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
    // stars: state.posts.current_post.post.postlike.likes,
    // hearts: state.posts.current_post.post.postlike.hearts,
    // hands: state.posts.current_post.post.postlike.hands,
    editorState: state.posts.editorState,
    comments: state.comments.comments
  }
}
export default connect(mapStateToProps, { loggedIn, getPost, getLikes, addHeart, addStar, addHand, addBookmark, getAllComments, addComment })(ViewPost)