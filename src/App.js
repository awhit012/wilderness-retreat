import React, { Component } from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import HelpContainer from './help/HelpContainer';
import About from './pages/About';
import Blog from './pages/Blog';
import LifeCoaching from './pages/LifeCoaching';
import RedPillCoaching from './pages/RedPillCoaching';
import TraumaCoaching from './pages/TraumaCoaching';
import Certifications from './pages/Certifications';


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
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />

                <Route path="/life-coaching" component={LifeCoaching} />
                <Route path="/red-pill-coaching" component={RedPillCoaching} />
                <Route path="/trauma-coaching" component={TraumaCoaching} />
                <Route path="/certifications" component={Certifications} />

              </div>
            <Footer />
          </div>
        </Router>
      </div>
      
    );
  }
}

export default App;
