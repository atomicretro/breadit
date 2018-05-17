import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import FrontPageContainer from './front_page_container';

class FrontPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNewestPoems();
    //GOES TO RAILS ROUTES SHOW, NOT NEWEST
  }

  render() {
    return (
      <div>
        hi
      </div>
    );
  }
}

export default FrontPage;
