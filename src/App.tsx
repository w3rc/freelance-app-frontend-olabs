import React from "react";

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import "./App.scss";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
