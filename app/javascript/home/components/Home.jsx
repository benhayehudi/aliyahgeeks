import React from 'react';
import Header from '../../header/components/Header';
import Navbar from '../../navbar/components/Navbar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <div className="body-container">
          CONTENT GOES HERE
        </div>
      </div>
    );
  }
}

export default Home