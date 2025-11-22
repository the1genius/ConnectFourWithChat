const directions = [
[1,0],
[0,1],
[1,1],
[1,-1]
]

const winLength = 4;

function isLegal(position, gameBoard) {
  const rows = gameBoard.length;        // how many rows the board has
  const columns = gameBoard[0].length;     // how many columns the board has
  const [row, column] = position;             

  return (row >= 0 && row < rows) && (column >= 0 && column < columns);
}


export default function winnAl(initialPosition, gameBoard) {
    const [initialRow, initialColumn] = initialPosition;           
    const symbol = gameBoard[initialRow][initialColumn];           
    
    function countInDirection(dirRow, dirColumn) {
    let checkingRow = initialRow + dirRow;                     //  start one step away so the initial won't be counted twice ( it isn't counted at all)
    let checkingColumn = initialColumn + dirColumn;                
    let count = 0;                            

    while (isLegal([checkingRow, checkingColumn], gameBoard) && gameBoard[checkingRow][checkingColumn] === symbol) {
      count++;                                 
      checkingRow += dirRow;                           
      checkingColumn += dirColumn;
    }

    return count;                            // how many there are in this direction
    }



   for (const [dirRow, dirColumn] of directions) {
    const forward = countInDirection(dirRow, dirColumn);     
    const backward = countInDirection(-dirRow, -dirColumn);   
    const series = 1 + forward + backward;          // +1 for the initial position

    if (series >= winLength) {
      return true;                                  
    }
  }

  return false;                              

}