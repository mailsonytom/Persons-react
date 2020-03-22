import React from 'react';
import Person from './Person/Person';

const persons = props =>
    props.persons.map((person,index)=>{
        console.log('[Persons.js] rendering...');
        return(
            <Person
            click={()=>props.cliced(index)}
            name={persons.name}
            age={persons.age}
            key={persons.id}
            changed={event => props.changed(event, person.id)}
            />
        );
    });

    export default persons;