import Player from "./Player";

function App() {
  return (
    <main>
      <img src="/public/game-logo.png" style={{ size: "500px" }} />
      <div id="game-container">
        <h1>React Tic-Tac-Toe</h1>

        <ol>
          <Player startingName="Player 1" symbol="X" score={0} />
          <Player startingName="Player 2" symbol="O" score={0} />
        </ol>
      </div>
    </main>
  );
}

export default App;
