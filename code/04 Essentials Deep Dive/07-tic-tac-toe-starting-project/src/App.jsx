import Player from "./Player";
import Gameboard from "./Gameboard";
import { useState} from "react";
import "./index.css"

function App() {
  
  const [activePlayer, setActivePlayer] =  useState("X");
  
  function handleClickSquare(){
    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X")
  }


  return (
    <main>
      <header>
        <img src="/public/game-logo.png" style={{ size: "500px" }} />{" "}
      </header>
      <div id="game-container">
        <h1>React Tic-Tac-Toe</h1>

        <ol id="players" className="highlight-player">
          <Player startingName="Player 1" symbol="X" score={0} isActive={activePlayer === "X"}/>
          <Player startingName="Player 2" symbol="O" score={0} isActive={activePlayer === "O"}/>
        </ol>
      <Gameboard onSelectSquare={handleClickSquare} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
