import React from 'react';
import { withRouter } from 'react-router';

class AuthorBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPoem(this.props.match.params.poemId);
  }

  render () {
    return(
      <div>
        <img src={this.props.match.params.image_url} />
      </div>
    );
  }
}

export default withRouter(AuthorBar);
