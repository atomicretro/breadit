import React from 'react';
import { withRouter } from 'react-router';

const AuthorBar = (ownProps) => {
  let poem = ownProps.poem || { };
  let author = ownProps.author;

  let imageUrl = poem.image_url;
  let title = poem.title;
  let authorId = poem.author_id;
  let authorName = author.name;
  let authorImage = author.image_url;



  return(
    <div className="author-bar">
      <div className="author-bar-background">
        <img src={imageUrl} className="background-img" />
      </div>
      <div className="author-img-container">
        <img
          className="author-img"
          src={authorImage}
          alt="author picture" />
        <div className="poem-bar-info">
          <h2 className="poem-bar-title">{title}</h2>
          <h3 className="poem-bar-author">{authorName}</h3>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AuthorBar);
