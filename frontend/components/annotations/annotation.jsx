import React from 'react';

class Annotation extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    var h = document.getElementsByClassName('poem-text').clientHeight;
    debugger
    return (
      <div className="annotation-container">
        {this.props.annotation.body}
      </div>
    );
  }
}

export default Annotation;

// this.props.poem is the annotation again!?!?!?!?
