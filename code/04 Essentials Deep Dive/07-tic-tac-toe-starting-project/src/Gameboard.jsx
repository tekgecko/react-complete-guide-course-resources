import { React, useState } from "react";

export default function Gameboard() {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  // function handleClick(index){
  //     console.log(index);
  //     const boardCopy = [...board];
  //     boardCopy[index] = 'X';
  //     setBoard(boardCopy);
  // }

  return (
    <div id="game-board">
      {board.map((value, index) => (
        <div key={index} className="board-row" style={{ display: "flex" , flexWrap: "wrap" , justifyContent: "center", gap: "2rem", margin: "3rem 0" }}>
          {value.map((box, boxIndex) => (
            <ol key={boxIndex}>
              <li>
                <button>{box}</button>
              </li>
            </ol>
          ))}
        </div>
      ))}
    </div>
  );
}
