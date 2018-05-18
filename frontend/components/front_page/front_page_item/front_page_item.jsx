import React from 'react';
import { Link } from 'react-router-dom';

const FrontPageItem = (ownProps) => {
  let index = ownProps.index;
  let poemId = ownProps.poemInfo.id;
  let title = ownProps.poemInfo.title;
  let author = ownProps.poemInfo.author_name;

  return (
    <div className="front-page-list-inner-item">
      <Link to={`/poems/${poemId}`}>
        <button className="front-page-list-item-button">
          <span className="front-page-list-item-index">{index}</span>
          <div className="front-page-list-item-info">
            <span className="front-page-poem-title">{title}</span>
            <br />
            <span className="front-page-author">{author}</span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default FrontPageItem;
