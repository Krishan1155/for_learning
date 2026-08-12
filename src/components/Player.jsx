import {useState} from 'react';

export default function Player({initialName,symbol,isActive})
{
    const [playerName,setPlayerName]=useState(initialName);
    const [isEditing,setISEditing] = useState(false);


    function handleEditClick()
    {
       setISEditing(editing => !editing); // schedules a state update to true and always remember previous state value by using function instead of below line.
       //setISEditing(!editing);
    }

    function handleChange(event)
    {
        setPlayerName(event.target.value);
    }

    let editiblePlayerName=<span className="player-name">{playerName}</span>
    if(isEditing)
    {
        editiblePlayerName=(<input type="text" required value={playerName} onChange={handleChange}/>);
    }

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editiblePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'} </button>
        </li>
    )
}