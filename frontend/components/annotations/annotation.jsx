import React from 'react';

class Annotation extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    debugger
    return (
      <div>
        {this.props.annotation.body}
        {this.props.poem.body}
      </div>
    );
  }
}

export default Annotation;
