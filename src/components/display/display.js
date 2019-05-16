import React from 'react';
import styles from './display.css';

const Display = class Display extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            running: false
        }
    }

    render(){
        return (
            <div >
                <h1></h1>
            </div>
        );
    }
}

export default Display;