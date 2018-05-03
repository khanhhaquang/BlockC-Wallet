import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Assets from './containers/Assets.js';
import HomePage from './containers/HomePage.js';
import Markets from './containers/Markets.js';

import {Switch,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="main-container">
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/Assets' component={Assets}/>
            <Route path='/Markets' component={Markets}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
