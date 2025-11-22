export default function GamwOver({winner, onRestart}) {
    return (
      <div id="game-over">
        <h2>Game Over!</h2>
{winner && <p>Winner: {winner}</p>}
{!winner && <p>Draw</p>}
   
    <p><button  onClick={onRestart}>Play Again</button></p>
        </div>
    )
}