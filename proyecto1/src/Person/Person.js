import React from 'react';

const person = (props) => {
    return <div>
                <p>Mi nombre es {props.name}, mi edad es {props.age}</p>
                <p>{props.children}</p>
            </div>
}

export default person;