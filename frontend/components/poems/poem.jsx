import React from 'react';
import AuthorBarContainer from '../authors/author_bar_container';

class Poem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPoem(this.props.match.params.poemId);
  }

  render () {
    return(
      <div>
        <AuthorBarContainer imageUrl={this.props.poem.image_url} />
      </div>
    );
  }
}

export default Poem;
