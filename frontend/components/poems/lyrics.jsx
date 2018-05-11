import React from 'react';

class Lyrics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return(
      <div className="lyrics-container">
        <p>{this.props.lyrics}</p>
      </div>
    );
  }
}

export default Lyrics;
