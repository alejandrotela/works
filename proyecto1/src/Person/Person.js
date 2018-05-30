import React from 'react';

import './Person.css';

const person = (props) => {
    return <div className="Person">
                <p onClick={props.click}>Mi nombre es {props.name}, mi edad es {props.age}</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
            </div>
}

export default person;