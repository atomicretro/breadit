import React from 'react';
import { Route } from 'react-router-dom';
import AuthorBarContainer from '../../authors/author_bar_container';
import CommentsContainer from '../../comments/comments_container';
import AnnotationContainer from '../../annotations/annotation_container';

class Poem extends React.Component {
  constructor(props) {
    super(props);
    this.poemBody = '';
    this.selection = window.getSelection();

    this.mouseUp = this.mouseUp.bind(this);
  }

  componentDidMount() {
    this.props.fetchPoem(this.props.match.params.poemId);
  }

  mouseUp() {
    let selection = window.getSelection();
    let firstChar = selection.anchorOffset;
    let lastChar = selection.focusOffset;

    if (lastChar - firstChar !== 0) {
      if (firstChar > lastChar) {
        let tempChar = firstChar;
        firstChar = lastChar;
        lastChar = tempChar;
      }

      console.log(selection);
      console.log(firstChar);
      console.log(lastChar);
      console.log(selection.anchorNode.data.charAt(lastChar));
    }
  }

  render () {
    let poemId = this.props.poem.id;
    let poemBody = this.props.poem.body;
    debugger
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
              <p className={`poem-${poemId}-lines`}
                onMouseUp={this.mouseUp}>{poemBody}</p>
            </div>
            <CommentsContainer
              poemId={this.props.match.params.poemId}
              commentIds={this.props.poem.comment_ids} />
          </div>
          <div className="annotation-area">
            <Route
              path="/poems/:poemId/annotations/:annotationId"
              component={AnnotationContainer} />
          </div>
        </div>
      </div>
    );
  }
}

export default Poem;
