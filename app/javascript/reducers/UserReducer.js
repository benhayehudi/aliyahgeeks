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
  current_post: [],
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
        case 'ADD_PUBLISHED_POST': 
          return Object.assign({}, state, {posts: state.posts.concat(action.post)})
        case 'ADD_DRAFT_POSTS':
          return Object.assign({}, state, {drafts: state.drafts.concat(action.drafts)})
        case 'UPDATE_EDITOR_STATE':
          return Object.assign({}, state, {editorState: action.editorState})
        case 'SET_CURRENT_DRAFT':
          return Object.assign({}, state, {currentDraft: action.props})
        case 'RESET_POSTS':
          return Object.assign({}, state, {posts: []})
        case 'RESET_DRAFTS':
          return Object.assign({}, state, {drafts: []})
        case 'VIEW_POST':
          return Object.assign({}, state, {
            current_post: action.data
          })
        default:
          return state;
    }
}

export default UserReducer;
