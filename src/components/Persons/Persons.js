import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked) {
            return true;
        } else {
            return false;
        }
        // instead of using these all checks properties in shouldComponentUpdate we can use pureComponent from react..
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('[App.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');

        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={event => this.props.changed(event, person.id)}
                />
            );
        });
    }
};

export default Persons;



