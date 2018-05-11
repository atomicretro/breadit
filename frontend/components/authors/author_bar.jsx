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
    console.log(this.props.authorImage);
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
          <h2 className="poem-title">{this.props.title}</h2>
        </div>
      </div>
    );
  }
}

export default withRouter(AuthorBar);
