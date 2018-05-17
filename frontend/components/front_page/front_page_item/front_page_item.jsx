import React from 'react';
import { Link } from 'react-router-dom';

const FrontPageItem = (ownProps) => {
  let poemId = ownProps.poemInfo.id;
  let title = ownProps.poemInfo.title;
  let author = ownProps.poemInfo.author_name;
  debugger
  return (
    <li className="front-page-list-item">
      <Link to={`/poems/${poemId}`}
        className="front-page-item-list-link">{title}, by {author}</Link>
    </li>
  );
};

export default FrontPageItem;
