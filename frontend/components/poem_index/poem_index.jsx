import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PoemItemContainer from '../poem_item/poem_item_container';

class PoemIndex extends Component {
  componentDidMount() {
    this.props.fetchPoems();
  }

  render() {
    const fetchedPoems = this.props.poems;
    const poemsToRender = [];
    for (let key in fetchedPoems) {
      poemsToRender.push(
        <PoemItemContainer
          key={`poem-item-${key}`}
          poemInfo = { fetchedPoems[key] } />
      );
    }

    return (
      <section className="pokedex">
        <ul>
          {poemsToRender}
        </ul>
      </section>
    );
  }
}

export default PoemIndex;
