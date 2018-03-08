import { browserHistory } from 'react-router';
import { EditorState } from 'draft-js';

let initialState = {
  posts:[],
  current_post: [],
  drafts:[],
   currentDraft: {
      id: null,
      isSaved: false
   },
   editorState: EditorState.createEmpty(),
   likes: '',
   hearts: '',
   hands: ''
}

function PostReducer(state = initialState, action) {
    switch (action.type) {
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
            // likes: action.data.likes.likes,
            // hearts: action.data.likes.hearts,
            // hands: action.data.likes.hands
          })
        case 'ADD_LIKE':
          return Object.assign({}, state, {
            likes: action.data[0].stars,
            hearts: action.data[0].hearts,
            hands: action.data[0].hands
          })
        case 'GET_ALL_POSTS':
          return Object.assign({}, state, {
            posts: action.data
          })
        default:
          return state;
    }
}

export default PostReducer;
