import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import PoemIndexItemContainer from './poem_index_item/poem_index_item_container';

class PoemIndex extends Component {
  componentDidMount() {
    this.props.fetchPoems();
  }

  alphabetizeByAuthor(poems) {
    let alphabetized = poems.sort((a, b) => {
      let authorA = a.props.data || a.props.poemInfo.author_name.toLowerCase();
      let authorB = b.props.data || b.props.poemInfo.author_name.toLowerCase();
      let splitA = authorA.split(' ');
      let splitB = authorB.split(' ');
      let lastA = splitA[splitA.length - 1];
      let lastB = splitB[splitB.length - 1];

      if(lastA < lastB) return -1;
      if(lastA > lastB) return 1;
      return 0;
    });

    return alphabetized;
  }

  render() {
    const fetchedPoems = this.props.poems;
    const poemsToRender = [];
    for(let key in fetchedPoems) {
      poemsToRender.push(
        <PoemIndexItemContainer
          key={`poem-item-${key}`}
          poemInfo = { fetchedPoems[key] } />
      );
    };
    let alphabetizedPoems = this.alphabetizeByAuthor(poemsToRender);

    return (
      <div className="background">
        <section className="foreground">
          <div className="poem-index-container">
            <h2>all poems</h2>
            <hr className="line3" />
            <ul className="poem-index-list-container">
              {alphabetizedPoems}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default PoemIndex;
