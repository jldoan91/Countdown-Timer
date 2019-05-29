import React from 'react';
import styles from './countdown.css'

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
            <div className={styles.container}>
                <div><h1><strong>{this.state.days}</strong> Days <strong>{this.state.hours}</strong> Hours <strong>{this.state.minutes}</strong> Minutes <strong>{this.state.seconds}</strong> Seconds left until <strong>{this.state.date}!</strong></h1></div>
                <h3>Enter a date</h3>
                <input className={styles.dateInput} type="date" disabled={this.state.submitted} onChange={this.handleChange} value={this.state.date}></input>
                <br />
                <button className={styles.startBtn} disabled={this.state.submitted} onClick={this.getDate}>Start</button>
            </div >
        );
    }
}

export default Countdown;