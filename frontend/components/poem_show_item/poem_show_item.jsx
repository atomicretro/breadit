import React from 'react';

const PoemShowItem = (props) => {
  return(
    <div className="poem-lines">
      <p>{props.lines}</p>
    </div>
  );
};

export default PoemShowItem;
