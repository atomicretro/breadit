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
        <FrontPageItemContainer
          key={`poem-item-${key}`}
          poemInfo = { fetchedPoems[key] } />
      );
    }

    return (
      <div>
        <ul>
          {poemsToRender}
        </ul>
      </div>
    );
  }
}

export default FrontPage;
