import React from 'react';

class PostSnippetCard extends React.Component {
  render() {
    return (
      <div className="post-snippet-container">
        <div id="post-snippet-title">POST TITLE</div>
        <div id="post-snippet-author-container">
          <div id="post-snippet-author-headshot"><img src="/assets/default-author-headshot.png" alt="default headshot" />NAME</div>
        </div>
        <div id="post-snippet-tags">#aliyah #hebrew #modiin</div>
      </div>
    )
  }
}
export default PostSnippetCard