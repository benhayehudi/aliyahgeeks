import React from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import WritePost from './WritePost';

const PostsApp = (props) => (
  <Router>
      <Route path='/posts/new' component={WritePost} />
  </Router>
)

export default PostsApp