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
    this.annotatePoemBody = this.annotatePoemBody.bind(this);
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

  annotatePoemBody() {
    let poemBody = this.props.poem.body;
    if (typeof poemBody === "string") {
      let annotatedPoemBody = [];
      let sortedAnnotations = this.props.annotations.sort((a, b) => {
        if(a.starting_character < b.starting_character) return -1;
        if(a.starting_character > b.starting_character) return 1;
        return 0;
      });

      let sections = [];
      let startChar = 0;
      sortedAnnotations.forEach((annotation, idx) => {
        let annoStart = annotation.starting_character;
        let annoEnd = annotation.ending_character;

        if (startChar === annoStart) {
          // sections.push([startChar, annoEnd, 'annotated']);
          sections.push(
            <span className={`annotation-${annotation.id}`}>
              {poemBody.slice(startChar, annoEnd)}
            </span>
          );
        } else {
          // sections.push([startChar, (annoStart - 1), 'not']);
          sections.push(
            <span className={`not-annotation`}>
              {poemBody.slice(startChar, (annoStart - 1))}
            </span>
          );
          // sections.push([annoStart, annoEnd, 'annotated']);
          sections.push(<span className={`annotation-${annotation.id}`}>
            {poemBody.slice(annoStart, annoEnd)}
          </span>);
        }

        if (idx === (sortedAnnotations.length - 1) && annoEnd !== poemBody.length) {
            // sections.push([(annoEnd + 1), poemBody.length, 'not']);
            sections.push(
              <span className={`not-annotation`}>
                {poemBody.slice((annoEnd + 1), poemBody.length)}
              </span>
            );
        }

        startChar = annoEnd + 1;
      });

      console.log(sections);

      return sections;
    }
  }

  render () {
    let poemId = this.props.poem.id;
    let poemBody = this.annotatePoemBody();
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
        {"aaa&lt<&ltaaa"}
      </div>
    );
  }
}

export default Poem;
