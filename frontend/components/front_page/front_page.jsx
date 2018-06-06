import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import FrontPageItemContainer from './front_page_item/front_page_item_container';

class FrontPage extends Component {
  constructor(props) {
    super(props);

    if(isEmpty(this.props.newestPoems)) this.props.fetchNewestPoems();
    if(isEmpty(this.props.randomPoems)) this.props.fetchRandomPoems();
  }

  componentWillUnmount() {
    this.props.fetchNewestPoems();
    this.props.fetchRandomPoems();
  }

  render() {
    const newestPoems = this.props.newestPoems;
    let newestPoem = newestPoems[0] || { };
    const newestPoemsList = [];
    for (let key in newestPoems) {
      newestPoemsList.push(
        <li
          className="front-page-list-outer-item"
          key={`front-page-list-outer-item-${key}`}>
          <FrontPageItemContainer
            key={`poem-item-${key}`}
            index={parseInt(key)+1}
            poemInfo = { newestPoems[key] } />
          <hr
            className="front-page-list-line"
            key={`front-page-line-${key}`} />
        </li>
      );
    }

    let randomPoemOne = this.props.randomPoems[0] || { };
    let randomPoemTwo = this.props.randomPoems[1] || { };

    return (
      <div>
        <div className="background">
          <section className="foreground">

            <div className="front-page-pictures-area">

              <div className="front-page-large-picture">
                <Link to={`/poems/${newestPoem.id}`}>
                  <span className="newest-poem-title">
                    {newestPoem.title}
                  </span>
                  <span className="newest-poem-author">
                    {newestPoem.author_name}
                  </span>
                  <img className="newest-poem-image" src={ window.images.newestPoemImage }></img>
                </Link>
              </div>

              <div className="front-page-small-pictures">

                <div className="random-poem-1">
                  <Link to={`/poems/${randomPoemOne.id}`}>
                    <span className="random-poem-1-title">
                      {randomPoemOne.title}
                    </span>
                    <span className="random-poem-1-author">
                      {randomPoemOne.author_name}
                    </span>
                    <img className="random-poem-1-image" src={ window.images.newestPoemImage }></img>
                  </Link>
                </div>

                <div className="random-poem-1">
                  <Link to={`/poems/${randomPoemTwo.id}`}>
                    <span className="random-poem-2-title">
                      {randomPoemTwo.title}
                    </span>
                    <span className="random-poem-2-author">
                      {randomPoemTwo.author_name}
                    </span>
                    <img className="random-poem-2-image" src={ window.images.newestPoemImage }></img>
                  </Link>
                </div>

              </div>

            </div>

            <div className="front-page-container">
              <h2>newest poems</h2>
              <hr className="line5" />
              <ul className="front-page-list-container">
                {newestPoemsList}
              </ul>
            </div>

          </section>
        </div>
      </div>
    );
  }
}

export default FrontPage;
