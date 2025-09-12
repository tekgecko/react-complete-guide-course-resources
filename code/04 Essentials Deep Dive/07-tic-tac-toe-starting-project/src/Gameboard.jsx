import { React, useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleClickSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      prevGameBoard[rowIndex][colIndex];
      const updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;

      return updatedGameBoard;

    });
    onSelectSquare();
  }

  return (
    <div id="game-board">
      {gameBoard.map((value, index) => (
        <div
          key={index}
          className="board-row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            margin: "3rem 0",
          }}
        >
          {value.map((box, boxIndex) => (
            <ol key={boxIndex}>
              <li>
                <button
                  onClick={() => {
                    handleClickSquare(index, boxIndex);
                  }}
                >
                  {box}
                </button>
              </li>
            </ol>
          ))}
        </div>
      ))}
    </div>
  );
}
