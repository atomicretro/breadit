import React from 'react';
import { Link } from 'react-router-dom';

const PoemIndexItem = (ownProps) => {
  let poemId = ownProps.poemInfo.id;
  let title = ownProps.poemInfo.title;
  let author = ownProps.authorInfo.name;

  return (
    <li className="poem-index-list-item">
      <Link
        to={`/poems/${poemId}`}
        className="poem-index-item-list-link">
        {title}, by {author}
      </Link>
    </li>
  );
};

export default PoemIndexItem;
