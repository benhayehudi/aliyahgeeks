import React from 'react';
import Header from '../../header/components/Header';
import Navbar from '../../navbar/components/Navbar';
import Footer from '../../footer/components/Footer';

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navbar />

        <div className="body-container">

          <div className="dashboard-header">
            <div id="dashboard-user-pic">
              <img src="/assets/default-author-headshot.png" alt="default headshot" />
            </div>
            <div id="dashboard-user-details">
              <div id="dashboard-user-name">Ploni Almoni</div>
              <div id="dashboard-edit-profile-link"><button className="dashboard-edit-profile-button"><a href="/user/edit">Edit Profile</a></button></div>
              <br />
              <span id="dashboard-user-twitter"><a href="https://twitter.com/plonialmoni"><img src="/assets/icons/twitter-icon.png" />@plonialmoni</a></span>
              <span id="dashboard-user-email"><a href="mailto:plonialmoni@anonymous.com"><img src="/assets/icons/email-icon.png" />plonialmoni@anonymous.com</a></span>
            </div>
         </div>
        

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
        </div>
        
        <Footer />
      </React.Fragment>
    )
  }

}
export default Dashboard