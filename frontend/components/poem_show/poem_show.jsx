import React from 'react';
import AuthorBarContainer from '../authors/author_bar_container';
import CommentsContainer from '../comments/comments_container';

class Poem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPoem(this.props.match.params.poemId);
  }

  render () {
    let poemId = this.props.poem.id;
    let poemBody = this.props.poem.body;
    return(
      <div className="background">
        <AuthorBarContainer
          imageUrl={this.props.poem.image_url}
          title={this.props.poem.title}
          authorId={this.props.poem.author_id}
          authorName={this.props.author.name}
          authorImage={this.props.author.image_url} />
        <div className="poem-show-foreground">
          <div className="poem-show-text-area">
            <h3 className="poem-show-title">{this.props.poem.title}</h3>
            <div className="poem-text">
              <p className={`poem-${poemId}-lines`}>{poemBody}</p>
            </div>
            <CommentsContainer
              poemId={this.props.match.params.poemId}
              commentIds={this.props.poem.comment_ids} />
          </div>
        </div>

      </div>
    );
  }
}

export default Poem;
