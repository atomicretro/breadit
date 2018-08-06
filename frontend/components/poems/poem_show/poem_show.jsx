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
    this.clicks = 0;

    this.selection = window.getSelection();
    this.closeModal = this.closeModal.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.getPoemBody = this.getPoemBody.bind(this);
    // this.annotatePoemBody = this.annotatePoemBody.bind(this);
    // this.getSections = this.getSections.bind(this);
    // this.navigateToAnnotation = this.navigateToAnnotation.bind(this);
    // this.getSelectionPositions = this.getSelectionPositions.bind(this);
  }

  componentDidMount() {
    this.props.fetchPoem(this.props.match.params.poemId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.data !== this.props.data) {
      this.chart = c3.load({ data: this.props.data });
    };
  }

  componentWillUnmount() {
    this.props.closeModal();
  }

  closeModal(e) {
    if(
      e.target.getAttribute('data') !== 'annotation' &&
      e.target.getAttribute('data') !== 'comment'
    ) {
      this.props.closeModal();
      if(this.props.location.pathname.includes('annotations')) {
        this.props.history.push(`/poems/${this.props.poem.id}`);
      }
    }
  }

  handleUpvote(e) {
    e.preventDefault();
    if(this.props.currentUserVoted.bool) {
      this.props.deleteVote({
        type: 'poems',
        type_id: this.props.poem.id,
        direction: 'upvote',
        vote_id: this.props.currentUserVoted.vote_id
      });
    } else {
      this.props.createVote({
        type: 'poems',
        type_id: this.props.poem.id,
        direction: 'upvote'
      });
    }
  }

  mouseUp(e) {
    let selection = window.getSelection();
    let startPos = selection.anchorOffset;
    let endPos = selection.focusOffset;

    if(endPos - startPos !== 0) {
      let poemId = this.props.poem.id;
      let absolutePositions = this.getSelectionPositions(
        document.getElementsByClassName(`poem-${poemId}-lines`)[0]
      );
      this.props.openAnnotationModal({depth: 2});
      this.props.receiveNewAnnotation(absolutePositions);
    }
  }

  getSelectionPositions(element) {
    let start = 0;
    let end = 0;
    let doc = element.ownerDocument || element.document;
    let win = doc.defaultView || doc.parentWindow;
    let sel;
    if(typeof win.getSelection != "undefined") {
        sel = win.getSelection();
        if (sel.rangeCount > 0) {
            let range = win.getSelection().getRangeAt(0);
            let preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.startContainer, range.startOffset);
            start = preCaretRange.toString().length;
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            end = preCaretRange.toString().length;
        }
    } else if((sel = doc.selection) && sel.type != "Control") {
        let textRange = sel.createRange();
        let preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToStart", textRange);
        start = preCaretTextRange.text.length;
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        end = preCaretTextRange.text.length;
    }
    return { startPos: start, endPos: end };
  }

  annotatePoemBody() {
    let poemBody = this.props.poem.body;
    if(typeof poemBody === "string") {
      let sortedAnnotations = this.props.annotations.sort((a, b) => {
        if(a.starting_character < b.starting_character) return -1;
        if(a.starting_character > b.starting_character) return 1;
        return 0;
      });

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

      if(previousStartChar === annoStart) {
        sections.push(
          <span
            key={`text-annotation-${annotation.id}`}
            onClick={() => this.navigateToAnnotation(annotation.id)}
            className={`text-annotation-${annotation.id}`}
            data="annotation">
            {poemBody.slice(previousStartChar, annoEnd + 1)}
          </span>
        );
      } else {
        sections.push(
          <span
            key={`not-annotations-${idx}`}
            className={`not-annotation`}
            data="not-annotation">
            {poemBody.slice(previousStartChar, annoStart)}
          </span>
        );
        sections.push(
          <span
            key={`text-annotation-${annotation.id}`}
            onClick={() => this.navigateToAnnotation(annotation.id)}
            className={`text-annotation-${annotation.id}`}
            data="annotation">
            {poemBody.slice(annoStart, annoEnd + 1)}
          </span>
        );
      }

      if(idx === (sortedAnnotations.length - 1) && annoEnd !== poemBody.length) {
        sections.push(
          <span
            key="not-annotation-end"
            className={`not-annotation`}
            data="not-annotation">
            {poemBody.slice((annoEnd + 1), poemBody.length + 1)}
          </span>
        );
      }

      previousStartChar = annoEnd + 1;
    });

    return sections;
  }

  navigateToAnnotation(annotationId) {
    this.props.openAnnotationModal({depth: 0});
    let poemId = this.props.poem.id;
    this.props.history.push(`/poems/${poemId}/annotations/${annotationId}`);
  }

  getPoemBody() {
    let poemBody;
    if(isEmpty(this.props.annotations)) poemBody = this.props.poem.body;
    else poemBody = this.annotatePoemBody();
    return poemBody;
  }

  render () {
    let poemId = this.props.poem.id;

    return(
      <div className="background" onMouseDown={this.closeModal}>
        <AuthorBar
          poem={this.props.poem}
          author={this.props.author} />
        <div className="show-foreground">
          <div className="poem-show-text-area" >
            <h3 className="poem-show-title">{this.props.poem.title}</h3>
            <div className="poem-text">
              <p className={`poem-${poemId}-lines`}
                onMouseUp={this.mouseUp}>{this.getPoemBody()}</p>
            </div>
            <CommentsContainer
              poemId={this.props.match.params.poemId}
              commentIds={this.props.poem.comment_ids} />
          </div>
          <div className="annotation-area">
            <AnnotationModal
              modal={this.props.modal}
              closeModal={this.closeModal} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Poem);
