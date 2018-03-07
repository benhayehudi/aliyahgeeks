import { addHeart, addStar, addHand } from '../actions/BlogPostActions';


export function addHeartCount() {
  let postId = this.props.post.post.id
  let counter = this.props.hearts + 1
  this.props.addHeart(counter, postId);
  document.getElementById('button-heart').disabled = true;
  $('#button-heart').off('addHeart');
  // $('#button-heart').on('click',function() {
  //   document.getElementById('button-heart').setAttribute("disabled","disabled");
  // })
}


export function addStarCount() {
  let postId = this.props.post.post.id
  let counter = this.props.stars + 1
  this.props.addStar(counter, postId);
}

export function addHandCount() {
  let postId = this.props.post.post.id
  let counter = this.props.hands + 1
  this.props.addHand(counter, postId);
}