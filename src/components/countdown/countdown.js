import React from 'react';

const Countdown = class Countdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: '',
            submitted: false
        }
    }

    handleChange = event => {
        this.setState({ date: event.target.value });
    };

    getDate = () => {
        this.setState({ submitted: true })
        this.interval = setInterval(() => {
            const now = new Date().getTime() / 1000;
            const date = new Date(this.state.date).getTime() / 1000;
            const timeLeft = (date - now);
            const days = Math.floor(timeLeft / 86400);
            const hours = Math.floor(timeLeft / 3600) % 24;
            const minutes = Math.floor(timeLeft / 60) % 60;
            const seconds = Math.floor(timeLeft) % 60;
            this.setState({ days: days, hours: hours, minutes: minutes, seconds: seconds });
            if (timeLeft <= 0) {
                this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                this.setState({ submitted: false })
                clearInterval(this.interval);
            }
        }, 1000);
    };

    render() {
        return (
            <div>
                <div>{this.state.days} Days {this.state.hours} Hours {this.state.minutes} Minutes {this.state.seconds} Seconds left until {this.state.date}!</div>
                <h3>Enter a date</h3>
                <input type="date" disabled={this.state.submitted} onChange={this.handleChange} value={this.state.date}></input>
                <button disabled={this.state.submitted} onClick={this.getDate}>Start</button>
            </div>
        );
    }
}

export default Countdown;