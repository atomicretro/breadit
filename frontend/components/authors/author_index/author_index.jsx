import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthorIndexItemContainer from './author_index_item/author_index_item_container';

class AuthorIndex extends Component {
  constructor(props) {
    super(props);

    this.alphabetize = this.alphabetize.bind(this);
  }

  componentDidMount() {
    this.props.fetchAuthors();
  }

  alphabetize(authors) {
    let alphabetized = authors.sort((a, b) => {
      if(a.props.authorInfo.name.toLowerCase() <
          b.props.authorInfo.name.toLowerCase()) {
            return -1;
      }

      if(a.props.authorInfo.name.toLowerCase() >
          b.props.authorInfo.name.toLowerCase()) {
            return 1;
      }

      return 0;
    });
    return alphabetized;
  }

  render() {
    const fetchedAuthors = this.props.authors;
    const authorList = [];
    for (let key in fetchedAuthors) {
      authorList.push(
        <AuthorIndexItemContainer
          key={`author-item-${key}`}
          authorInfo = { fetchedAuthors[key] } />
      );
    }
    let alphabetizedAuthors = this.alphabetize(authorList);

    return (
      <div className="background">
        <section className="author-index-foreground">
          <div className="author-index-container">
            <h2>all authors</h2>
            <hr className="line3" />
            <ul className="author-index-list-container">
              {alphabetizedAuthors}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default AuthorIndex;
