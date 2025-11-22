import { useState } from "react";


export default function Player({initialName, symbol, isTurn, onNameChange}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);


     function handleClick() {   
        setIsEditing((priviousEditingState) => !priviousEditingState);
        if(isEditing){
        onNameChange(symbol, playerName);
        }
    }

    function handleChange(e) {

    setPlayerName(e.target.value);
    }


    let displayName =  <span className="player-name">{playerName}</span>;
    if (isEditing) {
   displayName = <input type="text" required value={playerName} onChange={handleChange} maxLength={30} />
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
