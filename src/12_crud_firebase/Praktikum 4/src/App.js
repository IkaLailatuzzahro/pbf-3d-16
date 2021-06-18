import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import configureStore from "./redux/configureStore";
import Root from "./Root";
import './App.css';
import Header from './components/Header';
import routes from './components/routes';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Header />

          <Root />
        </Router>
      
    </Provider>
  );
}

export default App;
