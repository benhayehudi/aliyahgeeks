import { browserHistory } from 'react-router';

let initialState = {
  comments: []
}

function CommentReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_COMMENT': 
          return Object.assign({}, state, {comments: state.comments.concat(action.comment)})
        case 'GET_ALL_COMMENTS':
          return Object.assign({}, state, {
            comments: action.data
          })
        default:
          return state;
    }
}

export default CommentReducer;
