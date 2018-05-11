import React from 'react';
import AuthorBarContainer from '../authors/author_bar_container';
import LinesContianer from './lines_container';

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
        <AuthorBarContainer
          imageUrl={this.props.poem.image_url}
          title={this.props.poem.title}
          authorId={this.props.poem.author_id}
          authorImage={this.props.author.image_url} />
        <div className="poem-background">
          <div className="poem-foreground">
            <h3 className="poem-lines-title">{this.props.poem.title} lines</h3>
            <LinesContianer
              lines={this.props.poem.body} />
            
          </div>
        </div>
      </div>
    );
  }
}

export default Poem;
