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
    debugger
    return(
      <div>
        <img src={this.props.imageUrl} />
      </div>
    );
  }
}

export default withRouter(AuthorBar);
