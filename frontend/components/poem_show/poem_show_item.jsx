import React from 'react';

class PoemShowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="poem-lines">
        <p>{this.props.lines}</p>
      </div>
    );
  }
}

export default PoemShowItem;
