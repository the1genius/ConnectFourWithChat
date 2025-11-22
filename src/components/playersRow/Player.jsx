import { useState } from "react";

export default function Player({ initialName, symbol, isTurn, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleClick() {
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
    setIsEditing((previousEditingState) => !previousEditingState);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  const color = symbol === 'X' ? 'bg-red-500' : 'bg-yellow-400';

  return (
    <div className={`flex items-center gap-3 p-4 rounded-lg transition-all ${
      isTurn ? 'bg-white/10 ring-2 ring-yellow-300 shadow-lg' : 'bg-white/5'
    }`}>
      <div className={`w-12 h-12 rounded-full ${color} shadow-lg flex items-center justify-center text-white font-bold text-xl`}>
        {symbol}
      </div>
      <div className="flex-1">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded border-2 border-yellow-400 focus:outline-none"
            maxLength={15}
          />
        ) : (
          <span className="text-lg font-semibold text-white">{playerName}</span>
        )}
      </div>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg font-semibold transition-colors"
      >
        {isEditing ? '✓' : '✎'}
      </button>
    </div>
  );
}