import { useState } from "react";

function TicTacToe() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [board, setBoard] = useState(
    [null, null, null],
    [null, null, null],
    [null, null, null]
  );
  // const [ win, setWin ] = useState()

  return (
    <div>
      <h2>TicTacToe</h2>
    </div>
  );
}

export default TicTacToe;
