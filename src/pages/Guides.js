import React, { Component } from 'react';
// import Modalities from './Modalities';
import Button from '@material-ui/core/Button';

import './Guides.css';

const dael = "/images/dael.png";
const alex = "/images/alex.png";
const one = "/images/1.png";
const two = "/images/2.png";
const three = "/images/3.png";
const four = "/images/4.png";
const five = "/images/5.png";
const six = "/images/6.png";
const seven = "/images/7.png";

class About extends Component {
  render() {
    return (
    <div className="container">

    	<h1>Dael Oso</h1>
      <h2>Wilderness Guide, Psychotherapeutic Counselor, Shaman, Astrologer</h2>
      <img src={dael} alt="Meet Dael" className="map" />
      <p className="container">
      	Dael was born in the very wilds we will be exploring, right where we begin our journey in Timmins, Ontario, to a homesteading family with eight children.
			</p>
      <p className="container">
        Dael has been taking groups on wilderness excursions for 30 years, and has 25 years of experience in psychotherapeutic counseling and astrology and energertic counseling.
      </p>
			 <p className="container">
        He has a degree in music education at the University of Toronto, and since then has gone deep into study of the Aboriginal Medicine Wheel, and went on a deep pilgrimage climbing in the Himalayas. He has studied yoga,  ayurveda medicine, and tai chi for 5 years.
      </p>
       <p className="container">
        Dael spends his glorious summers in the wilderness of his childhood, gathering wild berries and other nutritious foods and selling them in farmers markets in Toronto.  
      </p>
       <p className="container">
        His winters are spent on the sacred Lake Atitlan in Mayan country in Guatemala, where he met our assistant guide, Alex White. 
      </p>
      <p className="container">
        Dael says, "Basically, I am a wild man whose first natural instinct is to live outdoors. In this moment we need this kind of organic therapy in the pure wilderness to remove the damage from constriction, depression, and anxiety."
      </p>
      <a target="_blank" 
        href="https://www.goldenkeysastrology.ca"
        rel="noopener noreferrer">
        <Button size="large" color="primary" variant="outlined">
            Dael's Website
        </Button>
      </a>
      <hr /> 

      <h1>Alex White</h1>
      <h2>Certified Life Coach</h2>
      <img src={alex} alt="Meet Alex" className="map" />
      <p className="container">
        Alex's journey took him from happy kid, to a serious childhood trauma, and later addiction and chronic physical and mental illness. In his early 30's he went through a life changing healing process which allowed him to create a joyful, peaceful, and healthy life living on the spectacular Lake Atitlan in Guatemala with his lovely wife and partner of 11 years. Along this journey he discovered his mission: to help people heal, connect to their true self, find their calling, and live their best lives.
      </p>
      <p className="container">
        He has a degree in Anthropology and two previous careers as a chef and a software engineer, and now has three years of experience as a life coach specializing in healing trauma, purging the victim mentality, finding purpose, and following their heart.
      </p>
       <p className="container">
        Today Alex is grateful for everything he went through as it gives him the tools to show others the way to true health and happiness. He says his journey also has blessed him an unwavering faith, a strong sense of purpose, and a solid foundation of toughness and strength.
      </p>
       <p className="container">
        His work is centered around showing others how to turn their past traumas into their own sources of these same vital qualities.
      </p>
      <p className="container">
        He also has a YouTube channel and has created 80+ videos on these same subjects.
      </p>

      <a target="_blank" 
        href="https://alexwhite.netlify.app/"
        rel="noopener noreferrer">
        <Button size="large" color="primary" variant="outlined">
            Alex's Website
        </Button>
      </a>
      <a target="_blank" 
        href="https://www.youtube.com/channel/UCFIvAwDouMS3OjBPU16uF7w"
        rel="noopener noreferrer">
        <Button size="large" color="primary" variant="outlined">
            Alex's YouTube Channel
        </Button>
      </a>
      <h2>Some of Dael's previous excursions and events</h2>
      <div className="container">

        <img src={one} alt="Meet Dael" className="map" />
        <img src={two} alt="Meet Dael" className="map" />
        <img src={three} alt="Meet Dael" className="map" />
        <img src={four} alt="Meet Dael" className="map" />
        <img src={five} alt="Meet Dael" className="map" />
        <img src={six} alt="Meet Dael" className="map" />
        <img src={seven} alt="Meet Dael" className="map" />

      </div>  


    </div>	
    );
  }
}

export default About;



