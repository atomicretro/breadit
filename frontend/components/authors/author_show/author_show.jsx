import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthorBar from '../../authors/author_bar';

class Author extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAuthor(this.props.match.params.authorId);
  }

  render () {
    let authorId = this.props.author.id;
    return(
      <div className="background">
        <AuthorBar
          author={this.props.author} />
        <div className="author-show-foreground">
          <div className="author-show-text-area">
            <h3 className="author-show-title">{this.props.author.title}</h3>
            <div className="author-text">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Author);
