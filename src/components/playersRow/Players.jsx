import Player from "./Player";

export default function Players({ whosTurn, handleNameChange, players }) {
  return (
    <>
      <Player
        initialName={players.X}
        symbol="X"
        isTurn={whosTurn === "X"}
        onNameChange={handleNameChange}
      />
      <Player
        initialName={players.O}
        symbol="O"
        isTurn={whosTurn === "O"}
        onNameChange={handleNameChange}
      />
    </>
  );
}