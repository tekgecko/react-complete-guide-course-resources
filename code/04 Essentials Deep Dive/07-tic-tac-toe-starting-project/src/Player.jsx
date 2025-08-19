import { useState } from "react";

export default function Player({ startingName, symbol, score }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    // We use a function updater to toggle the editing state
    // This ensures we always get the latest state value
    setIsEditing((editing) => !editing);
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className="player">
      {isEditing ? (
        <input
          type="text"
          value={playerName}
          defaultValue={startingName}
          onChange={handleNameChange}
        />
      ) : (
        <span className="player-name">{playerName}</span>
      )}
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
