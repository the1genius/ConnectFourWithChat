

const initialGameBoard = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    
];

export default function Gameboard({handleSelectedSymbole, turnsMadeArray}) {

    let gameBoard = initialGameBoard;

    for (const turn of turnsMadeArray) { // if turnsMadeArray is null the for just won't execute
        const {positionPlayed, nowActivePlayer} = turn
        const {row, collume} = positionPlayed;
        gameBoard[row][collume] = nowActivePlayer
    }


    
 //   const [gameBoard, setGameBoard] = useState(probablyTemporaryGameBoard);

    //function handleSelectedSquare(rowIndex, collumeIndex)  {
           // console.log("hehehe");
       // setGameBoard((previousGameBoard) => {
         //   const soItWontChangeAoutomatically = [...previousGameBoard.map((innerArray) => [...innerArray])];
        //    soItWontChangeAoutomatically[rowIndex][collumeIndex] = currentSymbol;
        //    return soItWontChangeAoutomatically;
                
    //    })
  //      updateCurrentSymbol();   
  //  };
    
    return (
      
            <ol id="game-board">
                {gameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                        {row.map((playerSymbol, collumeIndex) => (
                            <li key={collumeIndex}>
                                <button onClick={() => handleSelectedSymbole(rowIndex, collumeIndex)}>{playerSymbol}</button>
                            </li>
                        ))} 
                        </ol>
                    </li>
                ))}
            </ol>
        
            );
                        }
//() => handleSelectedSquare(rowIndex, collumeIndex)