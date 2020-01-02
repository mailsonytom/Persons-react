import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Kevin", age: 22 }
    ],
    otherState :'Some other value '
  };

  switchNameHandler = () => {
    // console.log('Was Clicked');
    this.setState ( {
      persons: [
        { name: "newName", age: 28 },
        { name: "Manuion", age: 29 },
        { name: "Kevin", age: 28 }
      ]
    })
  }
  nameChangedHandler =  (event) => {
    this.setState ( {
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value , age: 29 },
        { name: "Kevin", age: 22 }
      ]
    })
  }
  render() {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };
    return (
      <div className="App">
        <h2>Welcome to React</h2>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Maximin')}>Switch Name</button>
        <Person name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click ={this.switchNameHandler}
        changed={this.nameChangedHandler}></Person>
        <Person name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>

    );
    // return React.createElement('div',{className :"App"},React.createElement('h1',null, 'Do something'));
  }
}

export default App;
