import React from 'react'
import Board from "./children/Board";

class Game extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}
export default Game;
