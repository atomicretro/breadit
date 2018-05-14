import React from 'react';

const PoemShowItem = (props) => {
  return(
    <div className="poem-text">
      <p>{props.lines}</p>
    </div>
  );
};

export default PoemShowItem;
