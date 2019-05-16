import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/display/display';
import Input from './components/input/input';
import StartBtn from './components/startBtn/startBtn';

const App = () => {
    return (
        <div>
            <Display />
            <Input />
            <StartBtn />
        </div>
    );
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));