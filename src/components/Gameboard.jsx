import { useState } from 'react';

export default function Gameboard({ handleSelectedSymbol, board, currentPlayer }) {
  const [hoveredCol, setHoveredCol] = useState(null);
  const floor = board.length - 1;

  return (
    <div className="inline-block bg-blue-600 p-6 rounded-2xl shadow-2xl">
      <div className="grid grid-cols-7 gap-3">
        {board.map((row, rowIndex) => (
          row.map((playersSymbol, collumeIndex) => {
            let IsGravityAllow = true;
            if (rowIndex !== floor && !board[rowIndex + 1][collumeIndex]) {
              IsGravityAllow = false;
            }
            
            const isHovered = hoveredCol === collumeIndex && !playersSymbol && IsGravityAllow;
            
            return (
              <button
                key={`${rowIndex}-${collumeIndex}`}
                onClick={() => handleSelectedSymbol(rowIndex, collumeIndex)}
                onMouseEnter={() => setHoveredCol(collumeIndex)}
                onMouseLeave={() => setHoveredCol(null)}
                disabled={playersSymbol || !IsGravityAllow}
                className={`w-16 h-16 rounded-full transition-all ${
                  playersSymbol === 'X' 
                    ? 'bg-red-500 shadow-lg scale-100' 
                    : playersSymbol === 'O' 
                    ? 'bg-yellow-400 shadow-lg scale-100' 
                    : 'bg-white/90 hover:bg-white'
                } ${isHovered ? 'ring-4 ring-green-400' : ''} ${
                  !playersSymbol && !IsGravityAllow ? 'opacity-50 cursor-not-allowed' : ''
                } ${!playersSymbol && IsGravityAllow ? 'cursor-pointer hover:scale-105' : ''}`}
              >
                {isHovered && (
                  <div className={`w-full h-full rounded-full ${
                    currentPlayer === 'X' ? 'bg-red-500/30' : 'bg-yellow-400/30'
                  }`} />
                )}
              </button>
            );
          })
        ))}
      </div>
    </div>
  );
}