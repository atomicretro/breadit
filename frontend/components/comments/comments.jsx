import React from 'react';
import CommentItem from '../comment_item/comment_item';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render () {
    debugger
    const comments = this.props.comments;
    const commentsToRender = [];
    for (let key in comments) {
      commentsToRender.push(
        <CommentItem
          key={`comment-item-${key}`}
          comment = { comments[key] } />
      );
    }

    return(
      <div className="comments-container">
        <ul className="comments-list-container">
          {commentsToRender}
        </ul>
      </div>
    );
  }
}

export default Comments;
