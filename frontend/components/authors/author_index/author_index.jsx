import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthorIndexItemContainer from './author_index_item/author_index_item_container';

class AuthorIndex extends Component {
  componentDidMount() {
    this.props.fetchAuthors();
  }

  render() {
    const fetchedAuthors = this.props.authors;
    const authorsToRender = [];
    for (let key in fetchedAuthors) {
      authorsToRender.push(
        <AuthorIndexItemContainer
          key={`author-item-${key}`}
          authorInfo = { fetchedAuthors[key] } />
      );
    }

    return (
      <div className="background">
        <section className="author-index-foreground">
          <div className="author-index-container">
            <h2>all authors</h2>
            <hr className="line3" />
            <ul className="author-index-list-container">
              {authorsToRender}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default AuthorIndex;
