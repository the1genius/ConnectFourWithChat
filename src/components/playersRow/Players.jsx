import Player from "./Player";


export default function Gameboard({whosTurn}) {
    return (
      <div id="game-container">
        <ol id="players" className="highlight-player"> 
         <Player initialName="Player 1" symbol="X" isTurn={"X" === whosTurn } />
         <Player initialName="Player 2" symbol="O" isTurn={"O" === whosTurn } />
        </ol>
      </div>
    )
}