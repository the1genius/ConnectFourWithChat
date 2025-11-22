export default function GameOver({ winner, onRestart }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-in fade-in duration-300">
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-3xl shadow-2xl text-center max-w-md animate-in zoom-in duration-500">
        <h2 className="text-5xl font-bold text-white mb-4">
          {winner ? '🎉 Winner!' : '🤝 Draw!'}
        </h2>
        {winner && (
          <p className="text-3xl text-yellow-300 font-semibold mb-6">{winner}</p>
        )}
        {!winner && (
          <p className="text-2xl text-white mb-6">It's a tie!</p>
        )}
        <button
          onClick={onRestart}
          className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}