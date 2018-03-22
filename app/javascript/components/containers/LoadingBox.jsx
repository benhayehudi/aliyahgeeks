import React from 'react';

class LoadingBox extends React.Component {
  render() {
    return (

      <div className="login-container">
        <div className="edit-profile-box">
          <div id="title-firsthalf" className="loading-box">Nu?? Savlanut!</div>
          <div id="post-body" className="loading-box">
            <div><img src="/assets/loading-box-img.jpg" className="loading-box"/></div><br/>
            <div>Your content is being loaded from our top secret super high tech servers. If you are seeing this for too long then chances are there is no content here. If that's the case, see that blue button the top of this page? Yes, that's for you... go ahead, make some content and share your story!</div>
          </div>
          <div id="login-footer">
            Don't have an account yet? <a href="/sessions/new">Sign up today!</a>
          </div>
        </div>
      </div>
    ) 
  }
}

export default LoadingBox