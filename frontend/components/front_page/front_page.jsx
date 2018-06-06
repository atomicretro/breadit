import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import FrontPageItemContainer from './front_page_item/front_page_item_container';

class FrontPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNewestPoems();
    this.props.fetchRandomPoems();
  }

  render() {
    const fetchedPoems = this.props.poems;
    let newestPoem = fetchedPoems[0] || { };
    const poemsToRender = [];
    for (let key in fetchedPoems) {
      poemsToRender.push(
        <li
          className="front-page-list-outer-item"
          key={`front-page-list-outer-item-${key}`}>
        <FrontPageItemContainer
          key={`poem-item-${key}`}
          index={parseInt(key)+1}
          poemInfo = { fetchedPoems[key] } />
        <hr
          className="front-page-list-line"
          key={`front-page-line-${key}`} />
        </li>
      );
    }

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
                  <img className="random-poem-1-image" src={ window.images.newestPoemImage }></img>
                </div>
                <div className="random-poem-1">
                  <img className="random-poem-2-image" src={ window.images.newestPoemImage }></img>
                </div>
              </div>
            </div>

            <div className="front-page-container">
              <h2>newest poems</h2>
              <hr className="line5" />
              <ul className="front-page-list-container">
                {poemsToRender}
              </ul>
            </div>

          </section>
        </div>
      </div>
    );
  }
}

export default FrontPage;
