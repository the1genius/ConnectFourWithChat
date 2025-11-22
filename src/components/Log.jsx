

export default function Log ({turnsMadeArray}) {
    let log = <li>No moves yet</li>;
    return (
        <ol id="log">
            
            {turnsMadeArray.map(turn => (
                <li key={`${turn.positionPlayed.row}${turn.positionPlayed.collume}`}>
                    {turn.nowActivePlayer} selected {turn.positionPlayed.row+1}, {turn.positionPlayed.collume+1}
                    </li>
            ))}
            
    
            </ol>
    )
}

const hello = "hello";

