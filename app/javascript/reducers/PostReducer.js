import { browserHistory } from 'react-router';
import { EditorState } from 'draft-js';

let initialState = {
  posts:[],
  current_post: [],
  tags: [],
  drafts:[],
   currentDraft: {
      id: null,
      isSaved: false
   },
   editorState: EditorState.createEmpty(),
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
        case 'GET_LIKES':
          const newState = { ...state};
          newState.current_post.post.postlike = 
              {
                hearts: action.data[0].hearts,
                likes: action.data[0].stars,
                hands: action.data[0].hands
            }
          return newState; 
          
          // return Object.assign({}, state, {
          //   likes: action.data.likes,
          //   hearts: action.data.hearts,
          //   hands: action.data.hands
          // })
          // case 'ADD_LIKE':
          // const newerState = { ...state};
          // newerState.current_post.post.postlike = 
          //     {hearts: action.data.hearts},
          //     {likes: action.data.likes},
          //     {hands: action.data.hands}
          // return newerState; 
        case 'GET_ALL_POSTS':
          return Object.assign({}, state, {
            posts: action.data
          })
        case 'GET_TAGS':
          return Object.assign({}, state, {
            tags: action.data
          })
        default:
          return state;
    }
}

export default PostReducer;
