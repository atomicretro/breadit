import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthorBarContainer from '../../authors/author_bar_container';

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
        <AuthorBarContainer
          imageUrl={this.props.author.image_url}
          title={this.props.author.title}
          authorId={this.props.author.author_id}
          authorName={this.props.author.name}
          authorImage={this.props.author.image_url} />
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
