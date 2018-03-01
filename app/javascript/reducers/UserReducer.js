import { browserHistory } from 'react-router';
import { EditorState } from 'draft-js';

let initialState = {
  signed_in: false,
  email: '',
  first_name: '',
  last_name: '',
  user_location: '',
  twitter: '',
  id: '',
  picture: null,
  headshot: null,
  posts:[], 
  drafts:[],
   currentDraft: {
      id: null,
      isSaved: false
   },
   editorState: EditorState.createEmpty()

}

function UserReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGGED_IN':
            return Object.assign({}, state, {
              signed_in: true,
              email: action.data.email,
              first_name: action.data.first_name,
              last_name: action.data.last_name,
              user_location: action.data.location,
              twitter: action.data.twtter,
              id: action.data.id,
              picture: action.data.image_file_name,
              headshot: action.data.headshot_url
            })
        default:
          return state;
    }
}

export default UserReducer;
