import React from 'react';
import styles from './input.css';

const Input = class Input extends React.Component {
    constructor (props) {
        super(props);
    }

    render(){
        return (
                <input type="date" onChange={this.onChange} value={this.props.value}></input>
        );
    }
}

export default Input;