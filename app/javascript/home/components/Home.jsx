import React from 'react';
import Header from '../../header/components/Header';
import Navbar from '../../navbar/components/Navbar';
import PostSnippetCard from '../../posts/components/containers/PostSnippetCard';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navbar />
        <div className="body-container">
          <PostSnippetCard />
          <PostSnippetCard />
          <PostSnippetCard />
        </div>
      </React.Fragment>
    );
  }
}

export default Home