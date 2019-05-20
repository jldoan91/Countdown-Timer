import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/display/display';
import Input from './components/input/input';
import StartBtn from './components/startBtn/startBtn';

const App = class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: undefined,
            now: new Date().getTime(),
            days: undefined,
            hours: undefined,
            minutes: undefined,
            seconds: undefined
        }
        this.dateEntered = this.dateEntered.bind(this);
    }

    getDate(event) {
        this.setState({date: event.target.value})
    }
    
    dateEntered(){
        console.log('clicked');
        console.log(this.state.date);
    }

    render() {
        return (
            <div>
                <Display />
                <h3>Enter a date</h3>
                    <Input onChange={this.getDate} value={this.state.date} />
                    <StartBtn onClick={this.dateEntered} />
            </div>
        );
    }
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));