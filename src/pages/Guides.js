import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import './Guides.css';

const dael = "https://i.imgur.com/UDDnaNM.png";
// const alex = "/images/alex.png";
const one = "https://i.imgur.com/bK5vjJv.png";
const two = "https://i.imgur.com/2Ailvnc.png";
const three = "https://i.imgur.com/q7DiMLO.png";
const five = "https://i.imgur.com/lPpzuIe.png";
const seven = "https://i.imgur.com/4jCZnwz.png";

class About extends Component {
  render() {
    return (
    <div className="container">

    	<h1>Dael Oso</h1>
      <h2>Wilderness Guide, Psychotherapeutic Counselor, Shaman, Astrologer</h2>
      <img src={dael} alt="Meet Dael" className="map" />
      <p className="container">
      	Dael was born in the very wilds we will be exploring, right where we begin our journey in Timmins, Ontario, to a homesteading family with six children.
			</p>
      <p className="container">
        Dael has been taking groups on wilderness excursions for 30 years, and has 25 years of professional experience in psychotherapeutic counseling along with astrological interpretations for clients all over the world.
      </p>
			 <p className="container">
        He has a specialist degree in music education from the University of Toronto (Musbach, 1970), and since then has gone deep into study of the Aboriginal Medicine Wheel. He has also done a core personal pilgrimage climbing at age 66 in the Himalayas. He has studied yoga, Ayurvedic medicine, all sides of western psychological development periods,  Buddhist psychotherapeutic sound healing, and Tai Chi.
      </p>
       <p className="container">
        Dael spends his warm northern summers in the Timmins area wilderness of his childhood, harvesting wild blueberries in large quantities and other high potency wild and organic foods, selling them in four farmers markets in Toronto.  
      </p>
       <p className="container">
        His winters are spent on the powerful and panoramic Lake Atitlan in traditional Mayan communities in Guatemala, where he met our assistant guide, Alex White. 
      </p>
      <p className="container">
        Dael says, "Basically, I am a wild man whose first natural instinct is to live outdoors and away from the congestion of other human beings. 
      </p>
      <p className="container">
        In this moment we need this kind of deep wilderness immersion to remove the damage and stress, depression, and anxiety created in the last year."
      </p>
      <a target="_blank" 
        href="https://www.goldenkeysastrology.ca"
        rel="noopener noreferrer">
        <Button size="large" color="primary" variant="outlined">
            Dael's Website
        </Button>
      </a>
      <hr /> 

      <h2>Some of Dael's previous excursions and events</h2>
      <div className="container">

        <img src={one} alt="Meet Dael" className="map" />
        <img src={two} alt="Meet Dael" className="map" />
        <img src={three} alt="Meet Dael" className="map" />
        <img src={five} alt="Meet Dael" className="map" />
        <img src={seven} alt="Meet Dael" className="map" />

      </div>  
      <h1>Assistant Guide TBD</h1>

{/*       <h1>Alex White</h1> */}
{/*       <h2>Certified Life Coach</h2> */}
{/*       <img src={alex} alt="Meet Alex" className="map" /> */}
{/*       <p className="container"> */}
{/*         Alex's journey took him from happy kid, to a serious childhood trauma, and later addiction and chronic physical and mental illness. In his early 30's he went through a life changing healing process which allowed him to create a joyful, peaceful, and healthy life living on the spectacular Lake Atitlan in Guatemala with his lovely wife and partner of 11 years. Along this journey he discovered his mission: to help people heal, connect to their true self, find their calling, and live their best lives. */}
{/*       </p> */}
{/*       <p className="container"> */}
{/*         He has a degree in Anthropology and two previous careers as a chef (see  &nbsp; */}
{/*           <a target="_blank"  */}
{/*             href="/food" */}
{/*             rel="noopener noreferrer"> */}
{/*               food page */}
{/*           </a> */}
{/*         ) and a software engineer, and now has three years of experience as a life coach specializing in healing trauma, purging the victim mentality, finding purpose, and following their heart. */}
{/*       </p> */}
{/*        <p className="container"> */}
{/*         Today Alex is grateful for everything he went through as it gives him the tools to show others the way to true health and happiness. His journey also has blessed him an unwavering faith, a strong sense of purpose, and a solid foundation of toughness and strength. */}
{/*       </p> */}
{/*        <p className="container"> */}
{/*         His work is centered around showing others how to turn their past traumas into their own sources of these same vital qualities. */}
{/*       </p> */}
{/*       <p className="container"> */}
{/*         He also has a YouTube channel and has created 80+ videos on these same subjects. */}
{/*       </p> */}
{/*  */}
{/*       <a target="_blank"  */}
{/*         href="https://alexwhite.netlify.app/" */}
{/*         rel="noopener noreferrer"> */}
{/*         <Button size="large" color="primary" variant="outlined"> */}
{/*             Alex's Website */}
{/*         </Button> */}
{/*       </a> */}
{/*       <a target="_blank"  */}
{/*         href="https://www.youtube.com/channel/UCFIvAwDouMS3OjBPU16uF7w" */}
{/*         rel="noopener noreferrer"> */}
{/*         <Button size="large" color="primary" variant="outlined"> */}
{/*             Alex's YouTube Channel */}
{/*         </Button> */}
{/*       </a> */}
      <hr /> 

    </div>	
    );
  }
}

export default About;



