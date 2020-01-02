import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personState, setpersonState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Kevin", age: 22 }
    ]
  });

  const [otherState, setotherState] = useState('Some other value');

  const switchNameHandler = () => {
    // console.log('Was Clicked');
    setpersonState({
      persons: [
        { name: "Maximum", age: 28 },
        { name: "Manuion", age: 29 },
        { name: "Kevin", age: 28 }
      ]
    });
  };

  return (
    <div className="App">
      <h2>Welcome to React</h2>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age} ></Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
  );
  // return React.createElement('div',{className :"App"},React.createElement('h1',null, 'Do something'));
};


export default app;
