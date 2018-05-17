import React from 'react';
import { withRouter } from 'react-router';

const AuthorBar = (ownProps) => {
  return(
    <div className="author-bar">
      <div className="author-bar-background">
        <img src={ownProps.imageUrl} className="background-img" />
      </div>
      <div className="author-img-container">
        <img
          className="author-img"
          src={ownProps.authorImage}
          alt="author picture" />
        <div className="poem-bar-info">
          <h2 className="poem-bar-title">{ownProps.title}</h2>
          <h3 className="poem-bar-author">{ownProps.authorName}</h3>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AuthorBar);
