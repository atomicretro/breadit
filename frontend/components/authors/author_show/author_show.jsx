import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthorBar from '../../authors/author_bar';
import AuthorShowPoemItem from './author_show_poem_item';

class Author extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAuthor(this.props.match.params.authorId);
  }

  render () {
    let authorId = this.props.author.id;
    let fetchedPoems = this.props.poems;
    const poemsToRender = [];
    for(let key in fetchedPoems) {
      let poem = fetchedPoems[key] || { };
      poemsToRender.push(
        <AuthorShowPoemItem
          key={`poem-item-${key}`}
          poemInfo = { poem } />
      );
    };

    return(
      <div className="background">
        <AuthorBar
          author={this.props.author} />
        <div className="show-foreground">
          <div className="author-show-text-area">
            <h3 className="author-show-title">ALL POEMS</h3>
            <div className="all-author-poems">
              {poemsToRender}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Author);
