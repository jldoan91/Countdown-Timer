import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './store'
import Page from './components/page/page';



const App = () => {
  return (
      <Provider store={store}>
        <Page text={'React App!!'} />
      </Provider>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));