import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/display/display';
import Input from './components/input/input';
import StartBtn from './components/startBtn/startBtn';

const App = class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: '',
            now: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        }
    }
    
    dateEntered(){
        console.log('clicked');
    }

    render() {
        return (
            <div>
                <Display />
                <h3>Enter a date</h3>
                    <Input />
                    <StartBtn onClick={this.dateEntered} />
            </div>
        );
    }
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));