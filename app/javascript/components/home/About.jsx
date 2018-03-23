import React from 'react';
import {emojify} from 'react-emojione';

class About extends React.Component {
  render() {
    return (
      <div className="post-container">
          <div id="post-title">
            <h1>About Rechov Aliyah {emojify(':wave:')}</h1>
          </div>
          
          
          <div id="post-body">
            Rechov Aliyah is an online community for people considering aliyah or who have made aliyah. We strive to be a supportive and non-judgmental space where people can bring their questions, opinions and experiences. Our main feature is a blogging platform uniquely dedicated for aliyah. There is no need to filter for aliyah blog posts on Rechov Aliyah, only content related to aliyah can be found here. 
            <br /><br/>
            All are welcome to create accounts and blog posts here. You are welcome to cross post from your own personal sites as well. We will do our best to amplify your posts on social media and grow your readership. Please make sure not to share other people's content without their permission.
            <br /><br />
            <h1 id="about-team-heading">Who's Behind This?</h1>
            <table id="about-table">
              <tbody>
                <tr>
                  <td>
                    <img src="/assets/headshots/ben_greenberg_headshot.png" alt="Ben Greenberg"/>
                  </td>
                  <td>
                    <span id="team-name"><b>Ben Greenberg, Founder</b></span>
                    <br />
                    Ben designed the website, implemented its technical specifications and is the primary maintainer of it. When he's not working on Rechov Aliyah or at his day job he is usually hanging out with his kids or refreshing Twitter obsessively.
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
          
        </div>
    )
  }
}

export default About