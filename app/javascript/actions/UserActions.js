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

export function reactGA() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-116467756-1');
}