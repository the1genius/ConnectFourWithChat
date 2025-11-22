export default function Gameboard({handleSelectedSymbol, board}) {

    const floor = board.length -1;

    return (
      
            <ol id="game-board">
                {board.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                        {row.map((playersSymbol, collumeIndex) => {
                            
                            let IsGravityAllow = true;
                            if (rowIndex !== floor && !board[rowIndex + 1][collumeIndex]) {
                                IsGravityAllow = false;
                                }

                            return (
                                        <li key={collumeIndex}>
                                            <button
                                                onClick={() => handleSelectedSymbol(rowIndex, collumeIndex)}
                                                disabled={playersSymbol || !IsGravityAllow}
                                            >
                                            {playersSymbol}
                                            </button>
                                        </li>
  );
})}
                        </ol>
                    </li>
                ))}
            </ol>
        
            );
}
