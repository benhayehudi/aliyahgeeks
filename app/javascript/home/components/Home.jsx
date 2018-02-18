import React from 'react';
import Header from '../../header/components/Header';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="body-container">
          CONTENT GOES HERE
        </div>
      </div>
    );
  }
}

export default Home