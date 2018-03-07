import React from 'react';

class LikeCard extends React.Component {
  render() {
    console.log(this.props.reactions)
    return (
     <span id="like-count">{this.props.reactions.hearts}</span>
    )
  }
}

export default LikeCard