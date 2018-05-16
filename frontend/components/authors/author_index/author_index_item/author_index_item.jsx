import React from 'react';
import { Link } from 'react-router-dom';

const AuthorIndexItem = (ownProps) => {
  let authorId = ownProps.authorInfo.id;
  let name = ownProps.authorInfo.name;

  return (
    <li className="author-index-list-item">
      <Link to={`/authors/${authorId}`}
        className="author-index-item-list-link">{name}</Link>
    </li>
  );
};

export default AuthorIndexItem;
