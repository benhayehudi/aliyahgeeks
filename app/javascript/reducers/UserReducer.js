import { browserHistory } from 'react-router';

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
  bookmarks: [],
  bookmark_count: ''
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
              headshot: action.data.headshot_url,
              bookmarks: action.data.bookmarks,
              bookmark_count: action.data.bookmark_count
            })
        case 'ADD_BOOKMARK':
          return Object.assign({}, state, {
          bookmarks: action.data
        })
        default:
          return state;
    }
}

export default UserReducer;
