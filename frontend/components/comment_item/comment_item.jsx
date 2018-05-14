import React from 'react';
import { Link } from 'react-router-dom';

const CommentItem = (ownProps) => {
  let commentBody = ownProps.body;
  let commentAuthorUsername = ownProps.commentAuthor.username;

  return (
    <li className="comment-list-item">
      <span className="comment-list-item-username">
        {commentAuthorUsername}
      </span>
      <br />
      <span className="comment-list-item-body">
        {commentBody}
      </span>
    </li>
  );
};

export default CommentItem;
