import React from 'react';
import Navbar from '../containers/Navbar';
import PostSnippetCard from '../containers/PostSnippetCard';
import { loggedIn } from '../../actions/UserActions';
import { connect } from 'react-redux';

class Home extends React.Component {
  componentDidMount() {
    this.props.loggedIn();
  }
  render() {
    console.log(this)
    return (
      <React.Fragment>
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
const mapStateToProps = (state) => {
  return ({
    signed_in: state.signed_in,
    email: state.email,
    first_name: state.first_name,
    last_name: state.last_name,
    location: state.location,
    twitter: state.twitter,
    id: state.id
  })
}

export default connect(mapStateToProps, { loggedIn })(Home);
// export default Home