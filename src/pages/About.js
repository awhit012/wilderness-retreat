import React, { Component } from 'react';
// import Modalities from './Modalities';
import ReactPlayer from "react-player"
import './About.css';

class About extends Component {
  render() {
    return (
    <div>
    	<h1>My Story</h1>
    	<ReactPlayer
    		className="react-player"
        url="https://www.youtube.com/watch?v=???"
    	/>
      <p className="container">
				Coming Soon!      	
			</p>
			
			{/* <Modalities/> */}
    </div>	
    );
  }
}

export default About;



