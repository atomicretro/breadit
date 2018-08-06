import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PoemIndexItem from './poem_index_item/poem_index_item';

class PoemIndex extends Component {
  componentWillMount() {
    this.props.fetchPoems();
  }

  render() {
    const fetchedPoems = this.props.poems;
    const fetchedAuthors = this.props.authors;

    const poemsToRender = [];
    for(let key in fetchedPoems) {
      let poem = fetchedPoems[key] || { };
      let author = fetchedAuthors[poem.author_id] || { };
      if(author.name !== "Alec") {
        poemsToRender.push(
          <PoemIndexItem
            key={`poem-item-${key}`}
            poemInfo = { poem }
            authorInfo = { author } />
        );
      };
    };

    return (
      <div className="background">
        <section className="foreground">
          <div className="poem-index-container">
            <h2>all poems</h2>
            <hr className="line3" />
            <ul className="poem-index-list-container">
              {poemsToRender}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default PoemIndex;
