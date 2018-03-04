import axios from 'axios';
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import { markdownToDraft} from 'markdown-draft-js';
import {stateToHTML} from 'draft-js-export-html';


export function loggedIn() {
  return (dispatch => {

      const request = {
          method: 'get',
          data: JSON.stringify
      };
      axios.get('/users/check_for_user')
          .then(data => dispatch({ type: 'LOGGED_IN', data: data.data }))
  })
}

export const saveEditorState = editorState => {
  return {
     type: "UPDATE_EDITOR_STATE",
     editorState: editorState
  }
}

export const setCurrentDraft = props => {
  return {
     type: "SET_CURRENT_DRAFT",
     props
  }
}

export function getPost() {
  let href = location.href;
  let postId = href.split('-').pop().trim();
  return (dispatch => {

      const request = {
          method: 'get',
          data: JSON.stringify
      };
      axios.get(`/posts/${postId}`)
          .then(data => dispatch({ type: 'VIEW_POST', data: data.data }))
          .then(data => convertFromRaw(data.data.post.draft_json))
          .then(data => dispatch({ type: 'UPDATE_EDITOR_STATE', editorState: EditorState.createWithContent(data) }))
  })
}

export function getAllPosts() {
  return (dispatch => {
    
    const request = {
      method: 'get',
      data: JSON.stringify
    };
    axios.get(`/posts`)
      .then(data => dispatch({ type: 'GET_ALL_POSTS', data: data.data}))
  })
}