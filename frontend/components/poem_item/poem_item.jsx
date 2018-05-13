import React from 'react';
import { Link } from 'react-router-dom';

const PoemItem = (ownProps) => {
  let poemId = ownProps.poemInfo.id;
  let title = ownProps.poemInfo.title;
  let author = ownProps.poemInfo.author_name;

  return (
    <li><Link to={`/poems/${poemId}`}>{title}, {author}</Link></li>
  );
};

export default PoemItem;
