import React from 'react';
import AuthorBarContainer from '../authors/author_bar_container';
import LyricsContainer from './lyrics_container';

class Poem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPoem(this.props.match.params.poemId);
  }

  render () {
    return(
      <div className="poem-page">
        <AuthorBarContainer
          imageUrl={this.props.poem.image_url}
          title={this.props.poem.title}
          authorId={this.props.poem.author_id}
          authorImage={this.props.author.image_url} />
        <LyricsContainer
          lyrics={this.props.poem.body} />
      </div>
    );
  }
}

export default Poem;
