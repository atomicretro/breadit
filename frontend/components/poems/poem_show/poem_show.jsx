import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { isEmpty } from 'lodash';
import AuthorBar from '../../authors/author_bar';
import AnnotationModal from '../../modals/annotation_modal/annotation_modal';
import CommentsContainer from '../../comments/comments_container';

class Poem extends React.Component {
  constructor(props) {
    super(props);
    this.poemBody = '';

    this.selection = window.getSelection();
    // this.closeModal = this.closeModal.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.annotatePoemBody = this.annotatePoemBody.bind(this);
    this.getSections = this.getSections.bind(this);
    this.navigateToAnnotation = this.navigateToAnnotation.bind(this);
  }

  componentDidMount() {
    this.props.fetchPoem(this.props.match.params.poemId);
  }

  // closeModal() {
  //   if (this.props.modal !== null) {
  //     this.props.closeModal();
  //   }
  // } CLOSES MODAL IMMEDIATELY, FIX THIS!!!!!

  mouseUp(e) {
    let selection = window.getSelection();
    let startPos = selection.anchorOffset;
    let endPos = selection.focusOffset;

    if (endPos - startPos !== 0) {
      if (startPos > endPos) {
        let tempChar = startPos;
        startPos = endPos;
        endPos = tempChar;
      }
      debugger
      console.log(selection);
      console.log(startPos);
      console.log(endPos);
      console.log(selection.anchorNode.data.charAt(endPos));
      this.props.openAnnotationModal({depth: e.clientY});
      this.props.receiveNewAnnotation({startPos, endPos});
    }
  }

  annotatePoemBody() {
    debugger
    let poemBody = this.props.poem.body;
    if (typeof poemBody === "string") {
      debugger
      let sortedAnnotations = this.props.annotations.sort((a, b) => {
        if(a.starting_character < b.starting_character) return -1;
        if(a.starting_character > b.starting_character) return 1;
        return 0;
      });
      debugger

      let annotatedPoemBody = this.getSections(poemBody, sortedAnnotations);
      return annotatedPoemBody;
    }
  }

  getSections(poemBody, sortedAnnotations) {
    let sections = [];
    let previousStartChar = 0;

    sortedAnnotations.forEach((annotation, idx) => {
      let annoStart = annotation.starting_character;
      let annoEnd = annotation.ending_character;

      if (previousStartChar === annoStart) {
        sections.push(
          <span
            key={`text-annotation-${annotation.id}`}
            onClick={() => this.navigateToAnnotation(annotation.id)}
            className={`text-annotation-${annotation.id}`}>
            {poemBody.slice(previousStartChar, annoEnd + 1)}
          </span>
        );
      } else {
        sections.push(
          <span
            key={`not-annotations-${idx}`}
            className={`not-annotation`}>
            {poemBody.slice(previousStartChar, annoStart)}
          </span>
        );
        sections.push(
          <span
            key={`text-annotation-${annotation.id}`}
            onClick={() => this.navigateToAnnotation(annotation.id)}
            className={`text-annotation-${annotation.id}`}>
            {poemBody.slice(annoStart, annoEnd + 1)}
          </span>
        );
      }

      if (idx === (sortedAnnotations.length - 1) && annoEnd !== poemBody.length) {
        sections.push(
          <span
            key="not-annotation-end"
            className={`not-annotation`}>
            {poemBody.slice((annoEnd + 1), poemBody.length + 1)}
          </span>
        );
      }

      previousStartChar = annoEnd + 1;
    });

    return sections;
  }

  navigateToAnnotation(annotationId) {
    let poemId = this.props.poem.id;
    this.props.history.push(`/poems/${poemId}/annotations/${annotationId}`);
  }

  render () {
    let poemId = this.props.poem.id;
    let poemBody;
    if(isEmpty(this.props.annotations)) {
      poemBody = this.props.poem.body;
    } else {
      poemBody = this.annotatePoemBody();
    }

    return(
      <div className="background">
        <AuthorBar
          poem={this.props.poem}
          author={this.props.author} />
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
            <AnnotationModal modal={this.props.modal} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Poem);
