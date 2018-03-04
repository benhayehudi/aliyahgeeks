import React from 'react';
import Navbar from '../containers/Navbar';
import PostSnippetCard from '../containers/PostSnippetCard';
import { loggedIn, getAllPosts } from '../../actions/UserActions';
import { connect } from 'react-redux';

class Home extends React.Component {
  componentDidMount() {
    this.props.loggedIn();
    this.props.getAllPosts();
  }
  render() {
    let loadedPosts = 
    this.props.posts !== undefined && this.props.posts.length !== 0 ?
      this.props.posts : null
    const renderedPosts = 
      this.props.posts !== undefined && this.props.posts.length !== 0 ?
        loadedPosts.map(post => <PostSnippetCard post={post} key={post.id}/>) : "Loading..."
    return (
      <React.Fragment>
        <Navbar />
        <div className="body-container">
          {renderedPosts}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    signed_in: state.signed_in,
    email: state.email,
    first_name: state.first_name,
    last_name: state.last_name,
    location: state.location,
    twitter: state.twitter,
    id: state.id,
    posts: state.posts
  })
}

export default connect(mapStateToProps, { loggedIn, getAllPosts })(Home);
// export default Home