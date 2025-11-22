import Player from "./Player";


export default function Players({whosTurn, handleNameChange}) {
  
  



    return (
      <div id="game-container">
        <ol id="players" className="highlight-player"> 
         <Player initialName="Player 1" symbol="X" isTurn={"X" === whosTurn } onNameChange={handleNameChange} />
         <Player initialName="Player 2" symbol="O" isTurn={"O" === whosTurn }  onNameChange={handleNameChange}/>
        </ol>
      </div>
    )
}