import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PoemIndexItem from './poem_index_item/poem_index_item';

class PoemIndex extends Component {
  componentDidMount() {
    this.props.fetchPoems();
  }

  alphabetizeByAuthor(poems, authors) {
    let alphabetized = poems.sort((a, b) => {
      let authorAObj = authors[a.props.poemInfo.author_id];
      let authorBObj = authors[b.props.poemInfo.author_id];
      let authorA = authorAObj.name.toLowerCase();
      let authorB = authorBObj.name.toLowerCase();
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
    const fetchedAuthors = this.props.authors;

    const poemsToRender = [];
    for(let key in fetchedPoems) {
      let poem = fetchedPoems[key] || { };
      let author = fetchedAuthors[poem.author_id] || { };
      poemsToRender.push(
        <PoemIndexItem
          key={`poem-item-${key}`}
          poemInfo = { poem }
          authorInfo = { author } />
      );
    };

    let alphabetizedPoems = this.alphabetizeByAuthor(poemsToRender, fetchedAuthors);

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
