import React from 'react';
import Navbar from '../containers/Navbar';
import PostSnippetCard from '../containers/PostSnippetCard';
import LoadingBox from '../containers/LoadingBox';
import { loggedIn } from '../../actions/UserActions';
import { getAllPosts } from '../../actions/BlogPostActions';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazy-load';

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
        loadedPosts.map(post => <PostSnippetCard post={post} key={post.id}/>) : <LoadingBox />
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
    signed_in: state.users.signed_in,
    email: state.users.email,
    first_name: state.users.first_name,
    last_name: state.users.last_name,
    location: state.users.location,
    twitter: state.users.twitter,
    id: state.users.id,
    posts: state.posts.posts,
    bookmarks: state.users.bookmarks
  })
}

export default connect(mapStateToProps, { loggedIn, getAllPosts })(Home);
// export default Home