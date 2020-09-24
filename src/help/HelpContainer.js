import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './Help.css';
const banner = "/images/treat.jpg";

const HelpContainer = () => {
  return (
    <div className="store-container">
      <img src={banner} alt="banner" className="banner" />
      <div className="container">
        <div className="container">

          <div className="help-right">
            <h3>
              <em>Apply now for a chance to work with me one on one to radically improve your life.</em>
              <br />
              <small>Limited Space Available!</small>

            </h3> 

            <h2>Lorem ipsum dolor sit amet</h2>
              <p> 
                <em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</em>
              </p> 
              <p> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.               </p> 
              <Link to="/trauma-coaching"><Button size="large" variant="outlined">Learn More</Button></Link>
              <a target="_blank" href="https://forms.gle/J7bCc8qiwFxksdmu6"><Button size="large" color="primary" variant="outlined">Apply Now</Button></a>
            <hr /> 

            <h2>Lorem ipsum dolor sit amet</h2>
              <p> 
                <em>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </em>
              </p> 
              <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p> 
              <Link to="/red-pill-coaching"><Button size="large" variant="outlined">Learn More</Button></Link>
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://forms.gle/J7bCc8qiwFxksdmu6"><Button size="large" color="primary" variant="outlined">Apply Now</Button></a>
            <hr /> 

            <h2>Lorem ipsum dolor sit amet</h2>
              <p> 
                <em>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </em>
              </p> 
              <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p> 
              <Link to="/life-coaching"><Button size="large" variant="outlined">Learn More</Button></Link>
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://forms.gle/J7bCc8qiwFxksdmu6"><Button size="large" color="primary" variant="outlined">Apply Now</Button></a>
            <hr /> 
          </div>
        </div>
      </div>

    </div>
  );
}

export default HelpContainer;
