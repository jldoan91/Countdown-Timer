import React from 'react';
import styles from './input.css';

const Input = class Input extends React.Component {
    constructor (props) {
        super(props);
    }

    render(){
        return (
                <input type="date"></input>
        );
    }
}

export default Input;