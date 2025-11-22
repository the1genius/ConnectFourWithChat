import { useState } from 'react';
import Players from "./components/playersRow/Players.jsx";
import Gameboard from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import winnAl from "./WinningAl.jsx";

const INITIAL_GAME_BOARD = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];

const PLAYERS = ["X", "O"];

function DerivedActivePlayer(gameTurn) {
  let currentPlayerSymbol = "X";
  if (gameTurn[0] && gameTurn[0].playerSymbol === "X") {
    currentPlayerSymbol = "O";
  }
  return currentPlayerSymbol;
}

function DerivedGameBoard(turnsMade) {
  let gameBoard = INITIAL_GAME_BOARD.map(row => [...row]);
  for (const turn of turnsMade) {
    const { positionPlayed, playerSymbol } = turn;
    const { row, collume } = positionPlayed;
    gameBoard[row][collume] = playerSymbol;
  }
  return gameBoard;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [players, setPlayers] = useState({ X: 'Player 1', O: 'Player 2' });
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const currentPlayerSymbol = DerivedActivePlayer(gameTurn);
  const gameBoard = DerivedGameBoard(gameTurn);

  function handleSelectedSquare(rowIndex, collumeIndex) {
    if (winner || isDraw) return;

    setGameTurn((prevGameGrid) => {
      const currentPlayerSymbol = DerivedActivePlayer(prevGameGrid);
      const GameGrid = [
        {
          positionPlayed: { row: rowIndex, collume: collumeIndex },
          playerSymbol: currentPlayerSymbol,
        },
        ...prevGameGrid
      ];
      
      const boardForCheck = DerivedGameBoard(GameGrid);
      
      if (winnAl([rowIndex, collumeIndex], boardForCheck)) {
        setWinner(players[currentPlayerSymbol]);
      } else if (boardForCheck.every(row => row.every(cell => cell !== null))) {
        setIsDraw(true);
      }

      return GameGrid;
    });
  }

  function handleRestart() {
    setGameTurn([]);
    setWinner(null);
    setIsDraw(false);
  }

  function handleNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-2">
            Connect Four
          </h1>
          <p className="text-gray-300 text-lg">First to connect 4 wins!</p>
        </div>

        {/* Players */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Players 
            whosTurn={currentPlayerSymbol} 
            handleNameChange={handleNameChange}
            players={players}
          />
        </div>

        {/* Game Board */}
        <div className="flex justify-center mb-8">
          <Gameboard
            handleSelectedSymbol={handleSelectedSquare}
            board={gameBoard}
            currentPlayer={currentPlayerSymbol}
          />
        </div>

        {/* Move Log */}
        <div className="max-w-md mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Move History</h2>
          <Log turnsMadeArray={gameTurn} />
        </div>

        {/* Game Over Modal */}
        {(winner || isDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
      </div>
    </div>
  );
}

export default App;