import React from 'react';
import classes from './Cockpit.module.css';
console.log("classes: ", classes);
const cockpit = (props) => {

    const assignedclasses = [];
    let btnClass='';
    if(props.showPersons)
    {
      btnClass = classes.Red;

    }
    if (props.persons.length <= 2) {
      assignedclasses.push('classes.red');
    }
    if (props.persons.length <= 1) {
      assignedclasses.push('classes.bold');
    }

    return (
        <div className={classes.Cockpit}>
            <p className={assignedclasses.join(' ')}>Welcome to React</p>
        <button
            alt={props.showPersons}
            className="button"
            onClick={props.clicked}>Toggle persons</button>
        </div>
    );
};

export default cockpit;