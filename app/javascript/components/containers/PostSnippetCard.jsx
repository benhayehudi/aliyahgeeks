import React from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazy-load';

class PostSnippetCard extends React.Component {
  
  render() {
    let postUrl =
    this.props.post.title !== undefined && this.props.post.title !== null ?
      this.props.post.title.replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, " ")
      .replace(/\s+/g, '-') + "-" + this.props.post.id : "Loading..."
    return (
        <div className="post-snippet-container">
        <div id="post-snippet-title"><a href={"/"+postUrl}>{this.props.post.title}</a></div>
        <div id="post-snippet-author-container">
          <div id="post-snippet-author-headshot">
            <img src={this.props.post.user.headshot_url ? this.props.post.user.headshot_url : "/assets/default-author-headshot.png"} alt="author headshot" />
          </div>
          <div id="post-snippet-author-name">
            {this.props.post.user.full_name}
          </div>
        </div>
        <div className="post-snippet-footer">
          <div id="post-snippet-tags">
            <p><span>{"#" + this.props.post.tags}</span></p>
          </div>
          <div id="post-snippet-links">
            <div id="post-snippet-heart"><img src="/assets/icons/heart-icon.jpeg"/><div id="post-snippet-heart-count">20</div></div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, null)(PostSnippetCard);