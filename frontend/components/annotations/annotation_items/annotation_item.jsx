import React from 'react';

class Annotation extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let poemText = document
      .getElementsByClassName('poem-text')[0] || { clientHeight: 0 };
    let poemHeight = poemText.clientHeight;

    let annotator = this.props.annotators[this.props.annotation.annotator_id];
    let annotatorUsername = annotator.username;

    let annotationId = this.props.annotation.id;
    let thisAnnotation = document
      .getElementsByClassName(`text-annotation-${annotationId}`)[0] ||
        { offsetTop: 0 };
    let offsetTop = thisAnnotation.offsetTop;

    let annotationBody = this.props.annotation.body;
    if(annotatorUsername === "alec cuccia") {
      annotationBody =
        <a
          href={`${annotationBody}`}
          data="annotation">
          {annotationBody.slice(2)}
        </a>;
    };

    return (
      <div className="annotation-item" data="annotation">
        <div className="annotation-item-body" data="annotation">
          {annotationBody}
        </div>
        <div className="annotation-item-author" data="annotation">
          —{annotatorUsername}
        </div>
      </div>
    );
  }
}

export default Annotation;
