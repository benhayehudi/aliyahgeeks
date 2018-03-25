import axios from 'axios';

export function getAllComments() {
  let href = location.href;
  let postId = href.split('-').pop().trim();
  return (dispatch => {
    
    const request = {
      method: 'get',
      data: JSON.stringify
    };
    axios.get(`/comments/${postId}`)
      .then(data => dispatch({ type: 'GET_ALL_COMMENTS', data: data.data}))
  })
}

export function addComment(post_id, user_id, text) {
  return (dispatch => {

  const payload = {
    post_id: post_id,
    user_id: user_id,
    text: text
  }  
  const request = {
    method: 'post',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  };

  fetch('/comments/new', request)
    .then(data => fetch(`/comments/${post_id}`))
    .then(data => data.json())
    .then(data => dispatch({ type: 'GET_ALL_COMMENTS', data: data }))
  }
)}

