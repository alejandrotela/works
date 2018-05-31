import React from 'react';

import './userOutput.css';

const userOutput = (props) => {
    return (
        <div className="userOutput"> 
            <p>Nombre de usuario: {props.userName}</p>
            <p>Segundo parrafo</p>
        </div>
    );
}

export default userOutput;

