import React from 'react';
import { Link } from 'react-router-dom';

const AuthorShowIndexItem = (ownProps) => {
  let poemId = ownProps.poemInfo.id;
  let title = ownProps.poemInfo.title;

  return (
    <li className="poem-index-list-item">
      <Link
        to={`/poems/${poemId}`}
        className="poem-index-item-list-link">
        {title}
      </Link>
    </li>
  );
};

export default AuthorShowIndexItem;
