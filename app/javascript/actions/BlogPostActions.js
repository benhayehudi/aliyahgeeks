import axios from 'axios';
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import { markdownToDraft} from 'markdown-draft-js';
import {stateToHTML} from 'draft-js-export-html';

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

export function getLikes() {
  let href = location.href;
  let postId = href.split('-').pop().trim();
  return (dispatch => {

    const request = {
        method: 'get',
        data: JSON.stringify
    };
    axios.get(`/postlikes/${postId}`)
      .then(data => dispatch({ type: 'GET_LIKES', data: data.data[0]}))
  })
}

export function getPostEdit() {
  let href = window.location.pathname;
  let splithref = href.split('/');
  let postId = splithref[2]
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

export function getUserPosts() {
  let href = location.href;
  let userId = href.split('/').pop().trim();
  return (dispatch => {

    const request = {
      method: 'get',
      data: JSON.stringify
    };
    axios.get(`/user/posts/${userId}`)
      .then(data => dispatch({ type: 'GET_ALL_POSTS', data: data.data }))
  })
}

export function addHeart(counter, postId, userId) {
  return (dispatch => {

  const payload = {
    hearts: counter,
    post_id: postId,
    user_id: userId
  }  
  const request = {
    method: 'post',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  };

  fetch('/postlikes', request)
    .then(data => fetch(`/postlikes/${postId}`))
    .then(data => data.json())
    .then(data => dispatch({ type: 'GET_LIKES', data: data[0] }))
  }
)}

export function addStar(counter, postId, userId) {
  return (dispatch => {

  const payload = {
    likes: counter,
    post_id: postId,
    user_id: userId
  }  
  const request = {
    method: 'post',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  };

  fetch('/postlikes', request)
    .then(data => fetch(`/postlikes/${postId}`))
    .then(data => data.json())
    .then(data => dispatch({ type: 'GET_LIKES', data: data[0] }))
  }
)}

export function addHand(counter, postId, userId) {
  return (dispatch => {

  const payload = {
    hands: counter,
    post_id: postId,
    user_id: userId
  }  
  const request = {
    method: 'post',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  };

  fetch('/postlikes', request)
    .then(data => fetch(`/postlikes/${postId}`))
    .then(data => data.json())
    .then(data => dispatch({ type: 'GET_LIKES', data: data[0] }))
  }
)}

export function addBookmark(postId, userId) {
  return (dispatch => {

  const payload = {
    post_id: postId,
    user_id: userId
  }  
  const request = {
    method: 'post',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  };

  fetch('/bookmarks', request)
    .then(data => data.json())
    .then(data => dispatch({ type: 'ADD_BOOKMARK', data: data }))
  }
)}