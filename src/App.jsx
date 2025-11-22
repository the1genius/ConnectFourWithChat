import Players from "./components/playersRow/Players.jsx";
//import Gameboard from "./components/gameboard/Gameboard.jsx";
//import Log from "./components/log/Log.jsx";
import Gameboard from "./components/Gameboard.jsx";
import { useState } from "react";
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
    [null, null, null, null, null, null, null]
    
];

const PLAYERS = ["X", "O"];
let winner;
let IsDraw = false;

function DerivedActivePlayer(gameTurn) {
   let currentPlayerSymbol = "X"; // better than using the other state
      if ( gameTurn[0] && gameTurn[0].playerSymbol == "X")
      {// could be also prevGameGrid.lemgth > 0 &&g
        currentPlayerSymbol = "O";
      }
      return currentPlayerSymbol;
}


function DerivedGameBoard(turnsMade) {
  let gameBoard = INITIAL_GAME_BOARD.map(row => [...row]);
    for (const turn of turnsMade) { // if GameTurn is null the for just won't execute
        const {positionPlayed, playerSymbol} = turn;
        const {row, collume} = positionPlayed;
        gameBoard[row][collume] = playerSymbol;
    }
    return gameBoard;
}



function App() {
 const [gameTurn, setGameTurn] = useState([]);
const [players, setPlayers] = useState({
      X: 'Player 1',
      O: 'Player 2'
});



 const currentPlayerSymbol = DerivedActivePlayer(gameTurn);
 const gameBoard = DerivedGameBoard(gameTurn);




  function handleSelectedSquare( rowIndex, collumeIndex)
  {
    setGameTurn((prevGameGrid)=>
    {
      
      const currentPlayerSymbol = DerivedActivePlayer(prevGameGrid);
      const GameGrid = [
        {
        positionPlayed: {row: rowIndex, collume: collumeIndex},
        playerSymbol: currentPlayerSymbol,

      },
      ...prevGameGrid];


       const boardForCheck =  DerivedGameBoard(GameGrid);
     IsDraw = boardForCheck.every(row => row.every(cell => cell !== null)) && !winner;
        console.log(IsDraw);

  if (winnAl([rowIndex, collumeIndex], boardForCheck)) {
     winner = players[currentPlayerSymbol];
    console.log("Winner:", winner);
  }

      return GameGrid;
    });
    
  
  }

function handleRestart() {
  setGameTurn([]);
  winner = null;
  IsDraw = false;
}

function handleNameChange(symbol, newName) {
  setPlayers(prevPlayers => {
    return {
      ...prevPlayers, // overwrite only the new name
      [symbol]: newName
    };
  });
}

  return (
<main>
<div id="">

 <Players whosTurn={currentPlayerSymbol} handleNameChange={handleNameChange}  />
 {(winner || IsDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
<Gameboard handleSelectedSymbol={handleSelectedSquare} board={gameBoard}/>
</div>
<Log turnsMadeArray={gameTurn} />
</main>
 )

}

export default App
