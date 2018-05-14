import React from 'react';
import { Link } from 'react-router-dom';

const CommentItem = (ownProps) => {
  let commentBody = ownProps.body;
  let commentAuthorUsername = ownProps.commentAuthor.username;

  return (
    <li className="comment-list-item">
      {commentAuthorUsername}
      {commentBody}
    </li>
  );
};

export default CommentItem;
