import Player from "./Player";
import Gameboard from "./Gameboard";

function App() {
  return (
    <main>
      <header>
        <img src="/public/game-logo.png" style={{ size: "500px" }} />{" "}
      </header>
      <div id="game-container">
        <h1>React Tic-Tac-Toe</h1>

        <ol>
          <Player startingName="Player 1" symbol="X" score={0} />
          <Player startingName="Player 2" symbol="O" score={0} />
        </ol>
      <Gameboard />
      </div>
    </main>
  );
}

export default App;
