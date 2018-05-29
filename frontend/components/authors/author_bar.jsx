import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

const AuthorBar = (ownProps) => {
  let poem = ownProps.poem || { };
  let author = ownProps.author;

  let poemImage = poem.image_url;
  let title = poem.title;
  let authorId = poem.author_id;
  let authorName = author.name;
  let authorImage = author.image_url;

  let poemBarInfo;
  if (isEmpty(poem)) {
    poemBarInfo = (
      <div className="poem-bar-info">
        <h2 className="poem-bar-author">{authorName}</h2>
      </div>
    );
  } else {
    poemBarInfo = (
      <div className="poem-bar-info">
        <h2 className="poem-bar-title">{title}</h2>
        <h3 className="poem-bar-author">
          <Link to={`/authors/${authorId}`}>{authorName}</Link>
        </h3>
      </div>
    );
  }

  return(
    <div className="author-bar">
      <div className="author-bar-background">
        <img src={poemImage} className="background-img" />
      </div>
      <div className="author-img-container">
        <img
          className="author-img"
          src={authorImage}
          alt="author picture" />
        {poemBarInfo}
      </div>
    </div>
  );
};

export default withRouter(AuthorBar);
