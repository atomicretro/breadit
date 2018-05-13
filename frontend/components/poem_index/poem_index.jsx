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
        <PoemItemContainer poemInfo = { fetchedPoems[key] } />
      );
    } //SEEMS TO GO THROUGH FOR EVERY POEM BEFORE DOING ITEMCONTAINER STUFF

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
