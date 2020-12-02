import React from 'react';
import './UserOutput.css';


const UserOutput = (props) => {
    return (
        <div className="Introduction">
            <h1 onClick={props.click}>Hello, I'm called {props.username}</h1>
        </div>
    )
}

export default UserOutput;