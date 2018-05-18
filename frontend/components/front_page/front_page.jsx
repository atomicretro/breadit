import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import FrontPageItemContainer from './front_page_item/front_page_item_container';

class FrontPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNewestPoems();
  }

  render() {
    const fetchedPoems = this.props.poems;
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
