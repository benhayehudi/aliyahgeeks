import axios from 'axios';

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