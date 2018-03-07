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