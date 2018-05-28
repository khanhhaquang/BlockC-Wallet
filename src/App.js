import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store.js';
import {Switch,Route,Redirect} from 'react-router-dom';

// import components
import Header from './components/Header.js';
import Announcement from './components/Announcement.js';
import Bar from './components/Bar.js';
import Footer from './components/Footer.js';

// import containers
import Assets from './containers/Assets.js';
import HomePage from './containers/HomePage.js';
import Markets from './containers/Markets.js';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App layout">
        <Header/>
        <Bar/>
        <Announcement/>

        <div className="main-container layout-content">
          <Switch>
            <Route exact path='/' component={Markets}/>
            <Route path='/assets' component={Assets}/>
            <Route path='/markets' component={Markets}/>
          </Switch>
        </div>
        <Footer/>
      </div>
      </Provider>
    );
  }
}

export default App;
