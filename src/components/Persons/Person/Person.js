import React from 'react';
import styles from './Person.css';


const person = (props) => {
console.log('[Person.js] rendering');
    return (
        <div className="Person" style={styles}>
            <div>
                <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
                <input type="text" onChange={props.changed} value={props.name}></input>
            </div>
        </div>
    )
};

export default person;