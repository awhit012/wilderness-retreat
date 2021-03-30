import React, { Component } from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import HelpContainer from './help/HelpContainer';
import Guides from './pages/Guides';
import Food from './pages/Food';
import Register from './pages/Register';


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>  
          <div className="App">
            <NavBar />
              <div className="main-page">
                <Route exact path="/" component={HelpContainer} />
                <Route path="/guides" component={Guides} />
                <Route path="/food" component={Food} />
                <Route path="/register" component={Register} />
              </div>
            <Footer />
          </div>
        </Router>
      </div>
      
    );
  }
}

export default App;
