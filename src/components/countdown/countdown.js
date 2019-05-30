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
            submitted: false,
            newyear: '01/01/2020',
            independence: '07/04/2019',
            thanksgiving: '11/28/2019',
            christmas: '12/25/2019'
        }
    }

    handleChange = event => {
        this.setState({ date: event.target.value });
    };

    resetComponent = () => {
        clearInterval(this.interval);
        this.setState({
            submitted: false,
            days: '',
            hours: '',
            minutes: '',
            seconds: '',
            date: ''
        })
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    countDown = (date) => {
        clearInterval(this.interval);
        this.setState({ date: date })
        this.interval = setInterval(() => {
            const now = new Date().getTime() / 1000;
            const target = new Date(date).getTime() / 1000;
            const timeLeft = (target - now);
            const days = Math.floor(timeLeft / 86400);
            const hours = Math.floor(timeLeft / 3600) % 24;
            const minutes = Math.floor(timeLeft / 60) % 60;
            const seconds = Math.floor(timeLeft) % 60;
            (timeLeft <= 0 || !timeLeft) ? this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0, submitted: false }) : this.setState({ days: days, hours: hours, minutes: minutes, seconds: seconds, submitted: true })
        }, 1000);
    };

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.display}><strong>{this.state.days}</strong> Days <strong>{this.state.hours}</strong> Hours <strong>{this.state.minutes}</strong> Minutes <strong>{this.state.seconds}</strong> Seconds left until <strong>{this.state.date}</strong>!</div>
                <h3>Enter a date</h3>
                <input className={styles.dateInput} type="date" disabled={this.state.submitted} onChange={this.handleChange} value={this.state.date}></input>
                <div>
                    <button className={styles.btn} disabled={this.state.submitted} onClick={() => this.countDown(this.state.date)}>Start</button>
                    <button className={styles.btn} onClick={this.resetComponent}>Reset</button>
                </div>
                <div>
                    <button className={styles.btn} disabled={this.state.submitted} onClick={() => this.countDown(this.state.newyear)}> New Years</button>
                    <button className={styles.btn} disabled={this.state.submitted} onClick={() => this.countDown(this.state.independence)}> 4th of July</button>
                    <button className={styles.btn} disabled={this.state.submitted} onClick={() => this.countDown(this.state.thanksgiving)}> Thanksgiving</button>
                    <button className={styles.btn} disabled={this.state.submitted} onClick={() => this.countDown(this.state.christmas)}>Christmas</button>
                </div>
            </div>
        );
    }
}

export default Countdown;