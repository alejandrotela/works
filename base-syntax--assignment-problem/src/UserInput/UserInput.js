import React from 'react';

const userInput = (props) => {
    const iStyle = {
        border: '2px solid red'
    };

    return <input 
        type="text" 
        style={iStyle}
        onChange={props.changed} 
        value={props.currentName}/>;
};

export default userInput;