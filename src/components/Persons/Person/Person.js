import React, { Component } from 'react';
import styles from './Person.css';
import Aux from '../../../hoc/Aux';


class Person extends Component {
    render() {
        console.log('[Person.js] rendering');
        return (
            <Aux className="Person" style={styles}>
                <div className="Person" >
                        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                        <input type="text" onChange={this.props.changed} value={this.props.name}></input>
                </div>
            </Aux>
        );
    }
};

export default Person;