import React from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazy-load';
import LikeCard from './LikeCard';

class PostSnippetCard extends React.Component {
  
  render() {
    let postUrl =
    this.props.post.title !== undefined && this.props.post.title !== null ?
      this.props.post.title.replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, " ")
      .replace(/\s+/g, '-') + "-" + this.props.post.id : "Loading..."

    let mappedHearts = 
      this.props.post !== undefined && this.props.post !== null ?
      this.props.post.postlike.hearts : "0"
      // this.props.post.postlike.map(reaction => <LikeCard reactions={reaction} key={reaction.hands}/>) : 0
    return (
        <div className="post-snippet-container">
        <div id="post-snippet-title">
          <a href={"/post/view/"+postUrl}>{this.props.post.title}</a>
          { this.props.post.user_id == this.props.id ? 
          <button className="dashboard-edit-post-button"><a href={"/posts/" + this.props.post.id + "/edit"}>Edit Post</a></button> : null
          }
        </div>
        <div id="post-snippet-author-container">
          <div id="post-snippet-author-headshot">
            <img src={this.props.post.user.headshot_url ? this.props.post.user.headshot_url : "/assets/default-author-headshot.png"} alt="author headshot" />
          </div>
          <div id="post-snippet-author-name">
            <h4>{this.props.post.user.full_name}</h4>
          </div>
        </div>
        <div className="post-snippet-footer">
          <div id="post-snippet-tags">
            <p><span>{"#" + this.props.post.tags}</span></p>
          </div>
          <div id="post-snippet-links">
            <div id="post-snippet-heart"><img src="/assets/icons/heart-icon.jpeg"/>
            <div id="post-snippet-heart-count">{mappedHearts}</div></div>
          </div>
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
    headshot: state.users.headshot
  })
}

export default connect(mapStateToProps, null)(PostSnippetCard);