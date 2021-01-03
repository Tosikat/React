import React from 'react';
import Square from "./Square";

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      flag: true
    };
  }
  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
       status = 'Next player: '+( this.state.flag ? 'X': 'O');
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} handerSquare={() => this.handerSquare(i)}/>;
  }

  handerSquare (i) {
    const square = this.state.squares.slice()
    // 由于数据的不可变性 创建一个数组副本 防止修改原始数据
    // console.log(square===this.state.squares)

    //如果棋盘（数组中）存在棋子（值）或者赢者已出现 则不做任何修改 直接返回
    if (this.calculateWinner(square) || square[i]) {
      return;
    }

    if(this.state.flag){
      square[i] = 'X';
      console.log(square)
      console.log(this.state.flag, i)
      this.setState({
        squares: square,
        flag: !this.state.flag
      })
    }else {
      console.log(this.state.flag, i)
      square[i] = 'O';
      this.setState({
        squares: square,
        flag: !this.state.flag
      })
    }
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

}


export default Board;
