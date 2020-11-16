import { useState } from "react";

import "./TicTacToe.css";

function TicTacToe() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  // const [ win, setWin ] = useState()

  function handleClick(event) {
    console.log(event.target);
  }

  return (
    <div className="tic-tac-toe">
      {board.map((line, i) => (
        <div>
          {line.map((col, j) => (
            <button
              type="button"
              className="tic-tac-toe__cell"
              onClick={handleClick}
            >
              col
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TicTacToe;
