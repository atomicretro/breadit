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
                <h2 className="newest-poem-header">
                  newest poem
                </h2>
                <div className="newest-poem-area">
                  <Link to={`/poems/${newestPoem.id}`}>
                    <p className="newest-poem-text">
                      <span className="newest-poem-title">
                        {newestPoem.title}
                      </span>
                      <br/>
                      <span className="newest-poem-author">
                        {newestPoem.author_name}
                      </span>
                    </p>
                    <img className="newest-poem-image" src={ window.images.newestPoemImage }></img>
                  </Link>
                </div>
              </div>

              <div className="front-page-small-pictures">
                <h2 className="random-poems-header">
                  random poems
                </h2>

                <div className="random-poem-area">
                  <Link to={`/poems/${randomPoemOne.id}`}>
                    <p className="random-poem-text">
                      <span className="random-titles">
                        {randomPoemOne.title}
                      </span>
                      <br/>
                      <span className="random-authors">
                        {randomPoemOne.author_name}
                      </span>
                    </p>
                    <img className="random-poem-1-image" src={ window.images.newestPoemImage }></img>
                  </Link>
                </div>

                <div className="random-poem-area">
                  <Link to={`/poems/${randomPoemTwo.id}`}>
                    <p className="random-poem-text">
                      <span className="random-titles">
                        {randomPoemTwo.title}
                      </span>
                      <br/>
                      <span className="random-authors">
                        {randomPoemTwo.author_name}
                      </span>
                    </p>
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
