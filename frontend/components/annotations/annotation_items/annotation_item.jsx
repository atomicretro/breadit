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

    // var rect = thisAnnotation.getBoundingClientRect();
    // console.log(rect.top, rect.right, rect.bottom, rect.left);

    return (
      <div className="annotation-item">
        <div className="annotation-item-body">
          {this.props.annotation.body}
        </div>
        <div className="annotation-item-author">
          —{annotatorUsername}
        </div>
      </div>
    );
  }
}

export default Annotation;
