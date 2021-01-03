import React from 'react';

function Square(props) {
    return (
      <button
        className="square"
        onClick={props.handerSquare}>
        {props.value}
      </button>
    );
}

export default Square;
