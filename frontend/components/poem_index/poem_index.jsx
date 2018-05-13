import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PoemIndexItemContainer from '../poem_index_item/poem_index_item_container';

class PoemIndex extends Component {
  componentDidMount() {
    this.props.fetchPoems();
  }

  render() {
    const fetchedPoems = this.props.poems;
    const poemsToRender = [];
    for (let key in fetchedPoems) {
      poemsToRender.push(
        <PoemIndexItemContainer
          key={`poem-item-${key}`}
          poemInfo = { fetchedPoems[key] } />
      );
    }

    return (
      <div className="background">
        <section className="poem-index-foreground">
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
