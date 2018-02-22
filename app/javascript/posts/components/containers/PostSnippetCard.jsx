import React from 'react';

class PostSnippetCard extends React.Component {
  render() {
    return (
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
    )
  }
}
export default PostSnippetCard