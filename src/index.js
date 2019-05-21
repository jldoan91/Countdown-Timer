import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from './components/countdown/countdown';

const App = class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
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
            <Countdown />
        );
    }
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));