import { useState } from "react";


export default function Player({initialName, symbol, isTurn}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    let displayName =  <span className="player-name">{playerName}</span>;
    if (isEditing) {
   displayName = <input type="text" required value={playerName} onChange={handleChange} />}

   function handleChange(e) {

    setPlayerName(e.target.value);
    }
    function handleClick(event) {   
        setIsEditing((priviousEditingState) => !priviousEditingState);
        
    }

     if (isEditing) {
         
     }
    return (
          <li className={isTurn ? "active" : undefined}>
            <span className="player">
              {displayName}
              <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleClick} >{isEditing ? "Save" : "Edit"}</button>
          </li>
    )   
}

//              <span className="player-symbol">{symbol}</span>
