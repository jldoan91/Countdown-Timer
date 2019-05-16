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
            <div>
                <button>Start</button>
            </div>
        );
    }
}

export default StartBtn;