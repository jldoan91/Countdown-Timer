import React from 'react';
import styles from './startBtn.css';

const StartBtn = class StartBtn extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            running: false
        }
    }

    render(){
        return (
                <button onClick={this.props.onClick}>Start</button>
        );
    }
}

export default StartBtn;