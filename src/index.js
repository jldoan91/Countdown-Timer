import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/display/display';
import Input from './components/input/input';
import StartBtn from './components/startBtn/startBtn';

const App = class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        }
    }
    render() {
        return (
            <div>
                <Display days={this.state.days} hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds}/>
                <Input />
                <StartBtn />
            </div>
        );
    }
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));