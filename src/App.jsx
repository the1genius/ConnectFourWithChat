import Players from "./components/playersRow/Players.jsx";
//import Gameboard from "./components/gameboard/Gameboard.jsx";
//import Log from "./components/log/Log.jsx";
import Gameboard from "./components/Gameboard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";


function App() {
  const [playerTurn, setPlayerTurn] = useState("X");
 const [gameTurn, setGameTurn] = useState([]);

  function handleSelectedSquare( rowIndex, collumeIndex)
  {
    setPlayerTurn((currentTurn)=> currentTurn === "X" ? "O" : "X");


    setGameTurn((prevGameGrid)=>
    {
      let currentPlayerSymbol = "X"; // better than using the 
      if ( prevGameGrid[0] &&prevGameGrid[0].nowActivePlayer == "X")
      {// could be also prevGameGrid.lemgth > 0 &&g
        currentPlayerSymbol = "O";
      }
        // the [0] points to the first thing in the Grid which the object of the turn that just occured
        // the nowActivePlayer points to the nowActivePlayer attribute in that object
        // + for all of the previous turns we do the spread opreated so they won't be pointers to something but an actual place in memory where the value is stored)
        // + I can't just use the active player value becaue it might not present the latest state
     
      const GameGrtid = [
        {
        positionPlayed: {row: rowIndex, collume: collumeIndex},
        nowActivePlayer: currentPlayerSymbol,

      },
      ...prevGameGrid];

      return GameGrtid;
    });
    
   //   return playerTurn,    didn't try but i THINK it doesn't work, cause even if the setPlayerTurn is called with the most current variable, it still updates the state 
   // only after the entire function is done
  }



  return (
<main>
<div id="">

 <Players whosTurn={playerTurn} />

<Gameboard handleSelectedSymbole={handleSelectedSquare} turnsMadeArray={gameTurn}/>
</div>
<Log />
</main>
 )

}

export default App
