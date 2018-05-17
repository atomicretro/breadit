import React from 'react';

class Annotation extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let poemText = document
      .getElementsByClassName('poem-text')[0] || { clientHeight: 0 };
    let poemHeight = poemText.clientHeight;

    let id = this.props.annotation.id;
    let thisAnnotation = document
      .getElementsByClassName(`text-annotation-${id}`)[0] || { offsetTop: 0 };
    let offsetTop = thisAnnotation.offsetTop;

    // var rect = thisAnnotation.getBoundingClientRect();
    // console.log(rect.top, rect.right, rect.bottom, rect.left);

    return (
      <div style={{minHeight: poemHeight + 39}}
        className="annotation-container">
        <div className="annotation-title">
          <h3>enjambment annotations</h3>
        </div>
        <div
          className="annotation-item">
          {this.props.annotation.body}
        </div>
      </div>
    );
  }
}

export default Annotation;
