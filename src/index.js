import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from './components/countdown/countdown';

const App = class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    connecToServer = () => {
        fetch('/');
    }

    componentDidMount() {
        this.connecToServer();
    }

    render() {
        return (
            <Countdown />
        );
    }
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));