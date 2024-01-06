import { useState } from "react";
import Card from "../card/Card";
import isWinner from "../../helper/checkWinner";
import { ToastContainer, toast } from 'react-toastify';

import "./Grid.css";
import 'react-toastify/dist/ReactToastify.css';

function Grid({ numberOfCards }) {
  const [turn, setTurn] = useState(true); // false -> X, true -> 0
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [winner, setWinner] = useState(null);
 
  function play(index) {
    console.log(index);
    if(turn == true) {
        board[index] = "0";
    }
    else {
        board[index] = "X";
    }

    const win = isWinner(board, turn ? "0" : "X");
    if(win) {
        setWinner(win);
        toast.success(`Congratulation ${win} win the game!!`)
    }

    setBoard([...board]);
    setTurn(!turn);
  }

  function reset() {
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
    setTurn(true);
  }

  return (
    <>      
        {winner && (
        <div className="grid-wrapper">
            <h1 className="winner">Winner is: {winner}</h1>
            <button className="reset" onClick={reset}>Restart Game</button>
            <ToastContainer position="top-center" />
        </div>
        )}

      <h1 className="turn-highlight">Current Turn: {(turn) ? "0" : "X"}</h1>

      <div className="grid">
        {board.map((value, idx) => {
          return <Card gameEnd={winner ? true : false} onPlay={play} player={value} key={idx} index={idx} />
        })}
      </div>
    </>
  );
}

export default Grid;
