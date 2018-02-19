import React from 'react';
import Header from '../../header/components/Header';
import Navbar from '../../navbar/components/Navbar';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navbar />
        <div className="body-container">
          CONTENT GOES HERE
        </div>
      </React.Fragment>
    );
  }
}

export default Home