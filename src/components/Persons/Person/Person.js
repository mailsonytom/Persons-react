import React, { Component } from 'react';
import propTypes from 'prop-types';

import styles from './Person.css';
import Aux from '../../../hoc/Aux';
import AuthContext from "../../../context/auth-context";


class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering');
        return (
            <Aux className="Person" style={styles}>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated</p> : <p>Login</p>}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <input
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text" onChange={this.props.changed} value={this.props.name}></input>
            </Aux>
        );
    }
};

Person.propTypes = {
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func
};

export default Person;