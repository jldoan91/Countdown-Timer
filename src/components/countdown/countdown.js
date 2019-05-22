import React from 'react';

const Countdown = class Countdown extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        }
    }

        handleChange = event => {
            this.setState({date: event.target.value});
        };

        getDate = () => {
            const now = new Date().getTime();
            const date = new Date(this.state.date).getTime();
            console.log(date);
            console.log(now);
        };

    render() {
        return (
            <div>
                <div>{this.state.days} Days {this.state.hours} Hours {this.state.minutes} Minutes {this.state.seconds} Seconds</div>
                <h3>Enter a date</h3>
                <input type="date" onChange={this.handleChange} value={this.state.date}></input>
                <button onClick={this.getDate}>Start</button>
            </div>
        );
    }
}

export default Countdown;