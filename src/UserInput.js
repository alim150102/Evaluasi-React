import React from 'react';
import UserInput from './UserInput.css';

const userInput = props => {
    return <input type='text' onChange={props.changed} value={props.userName}></input>
}

export default userInput;