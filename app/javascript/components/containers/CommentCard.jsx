import React from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazy-load';
import LikeCard from './LikeCard';

class CommentCard extends React.Component {
  
  render() {
    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date = this.props.comment !== undefined && this.props.comment.length !== 0 ?
      new Date(this.props.comment.comment.created_at) : null
    
    return (
        <div id="single-comment">
          <div id="single-comment-details">
            <img id="comment-profile-pic" src={this.props.comment.author.image_file_name ? "/assets/headshots/" + this.props.comment.author.image_file_name : "/assets/default-author-headshot.png"} alt="author headshot" />
            <span id="comment-username"><span id="comment-username-inner">{this.props.comment.author.first_name + ' ' + this.props.comment.author.last_name}</span></span>
            <div id="comment-date">{date.toLocaleDateString("en-US",dateOptions)}</div>
          </div>
          <div id="single-comment-body">
            {this.props.comment.comment.text}
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

export default connect(mapStateToProps, null)(CommentCard);