import React from 'react';
import moment from 'moment';
import { convertToRaw } from 'draft-js';
import { connect } from 'react-redux';
import { setCurrentDraft } from '../../actions/BlogPostActions';
import { loggedIn } from '../../actions/UserActions';
import { draftToMarkdown } from 'markdown-draft-js';
import $ from 'jquery';

class PostActions extends React.Component {
  componentDidMount() {
    this.props.loggedIn();
  }
  saveOrUpdateDraft = (event) => {
  event.preventDefault();
  const rawDraft = convertToRaw(this.props.editorState.getCurrentContent());
    const draft = JSON.stringify({ 
      id: this.props.id, 
      post: {
      title: document.getElementById("post-title-text").value,
      // image: $('#post-image').prop('files')[0],
      // tags: document.getElementById("post-tags-content").value,
      tag: document.querySelector('input[name = "post[tag]"]:checked').value,
      publish: document.getElementById('post-publish-content').checked,
      user_id: document.getElementById("post-user-id").value,
      draft_json: rawDraft
      }
    })
      if (this.props.currentDraft.isSaved === true || this.props.current_post !== undefined && this.props.current_post.length !== 0) {
         fetch(`/posts/${this.props.current_post.post.id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: draft})
         .then(res => res.json())
         .catch(error => console.error('Error'))
         .then(response => {
            console.log('Success');
            this.props.setCurrentDraft({isSaved: true});
         })
      } else {
         fetch(`/posts/new`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: draft})
         .then(res => res.json())
         .catch(error => console.error('Error:', error))
         .then(response => {
            console.log('Success');
            this.props.setCurrentDraft({id: response.id, isSaved: true});
         })
      }
   }
   render(){
      let saved = this.props.currentDraft.isSaved ? "Saved" : "Not Saved"
      return (
         <div>
            <span className="saved-message">{saved}</span>
            <button className="PostAction-buttons" onClick={this.saveOrUpdateDraft}>Save</button>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      signed_in: state.users.signed_in,
      id: state.users.id,
      editorState: state.posts.editorState,
      currentDraft: state.posts.currentDraft,
      current_post: state.posts.current_post
   }
}
export default connect(mapStateToProps, { setCurrentDraft, loggedIn })(PostActions)