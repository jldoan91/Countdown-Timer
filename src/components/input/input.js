import React from 'react';
import styles from './input.css';

const Input = class Input extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            running: false
        }
    }

    render(){
        return (
            <div>
                <h3>Enter a date!</h3>
                <input type="date"></input>
            </div>
        );
    }
}

export default Input;