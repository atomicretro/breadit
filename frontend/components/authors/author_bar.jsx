import React from 'react';
import { withRouter } from 'react-router';

class AuthorBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPoem(this.props.match.params.poemId);
  }

  render () {
    return(
      <div className="author-bar">
        <div className="author-bar-background">
          <img src={this.props.imageUrl} className="background-img" />
        </div>
        <div className="author-img-container">
          <img
            className="author-img"
            src={this.props.authorImage}
            alt="author picture" />
          <div className="poem-bar-info">
            <h2 className="poem-bar-title">{this.props.title}</h2>
            <h3 className="poem-bar-author">{this.props.authorName}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AuthorBar);
