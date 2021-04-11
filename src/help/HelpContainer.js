import React from 'react';
import ReactPlayer from "react-player"

import './Help.css';
const banner = "/images/main.png";
const map = "/images/map.png"
const one = "/images/one.png"
const two = "/images/two.png"
const three = "/images/three.png"
const four = "/images/four.png"
const fool = "/images/fool.jpg"
const letGo = "/images/letting-go.webp"
const ceremony = "/images/4.png";
const complete = "/images/6.png"


const HelpContainer = () => {
  return (
    <div className="store-container">
      <img src={banner} alt="banner" className="banner" />
      <div className="container">
        <div className="container">

          <h1>A 12 Day Primal Transformational Experience</h1>
            <p> 
              <blockquote><em>Shamanic healing, playfulness, full wilderness immersion.</em></blockquote>
            </p> 

            {/* <ReactPlayer */}
            {/*   className="react-player" */}
            {/*   url="https://www.youtube.com/watch?v=bgScv7eEpiU" */}
            {/* /> */}
          <hr /> 

            <img src={map} alt="map" className="map" />
          <h2>1. Timmins / Mattice</h2>
            <p> 
              Preparation: A complete list of all essentials for journey will be sent to you upon registration.
            </p> 
            <p> 
              Meeting point: Either by car directly to our cottage on Ice Chest Lake near Timmins, or fly in to Timmins Airport via Toronto. Shuttle can be arranged from Timmins Airport to the family cottage. (40 minutes)
            </p> 
            <p> 
              Everyone participating must be at Timmins Cottage by Sunday night July 4th. 
            </p> 
            <img src={one} alt="mattice river" className="map" />

          <hr /> 

          <h2>2. Thunderhouse Falls</h2>
            <p> 
              First and only major portage. The length and intracacy of the falls is ideal for unique campsights and the first initiatory ceremonies around the fire, the falls, and the sweat lodge. 
            </p> 
            <img src={two} alt="thunderhouse falls" className="map" />

          <hr /> 

          <h2>3. Island Camping</h2>
            <p> 
              As the journey deepens, camping on exquisit islands in the river represents the depth and absorbtion in the power of the river and the silence of nature. 
            </p> 
            <img src={three} alt="islands" className="map" />

          <hr /> 

          <h2>4. Moosenee</h2>
            <p> 
              It's only natural at the end of the journey that we come into the remote settlement of Mossenee where we can buy handicrafts, and connect to the aboriginal culture. 
            </p> 
            <p>It is best for this journey to allow yourself time before it starts, if possible, in the great northern Ontario region. As well any time after the trip will allow you to integrate what you have experienced before reimmersing yourself in your daily life.</p>
            <img src={four} alt="moosonee" className="map" />

          <hr /> 

          <h2><em>The Inner Journey</em></h2>
          <h2>1. The Fools Journey: Taking the Leap into the Unknown</h2>
            <p> 
              Are you ready for the depths of the of the ancient wilderness?
            </p> 
            <p> 
              Revisiting our childhood is integral in this adventure! We're all boyscouts and girlscouts exploring wide open possibilities of change.
            </p> 
            <p> 
              12 days following  the Missinaibi river creates the ideal time for a reviewing your life, work relationships and the active qualities of your souls need for peace and reflection. The vitality of the group invites each of us to find the deeper meanings in our lives. Group processing of individual journies also help us to witness our lives through each other.
            </p> 
            <p>Most important is that your guides Alex and Dael are able to skillfully help you process anything from your life that needs to change. The great value of organic therapies has to do with the return to our nature self and all the organic rythms that bring healing and renewal. </p>
            <img src={fool} alt="the fool tarot" className="map" />
          <hr /> 

          <h2>2. Erasing Personal History</h2>
            <p> 
              Can you release the tenacious hold of your day to day programming?
            </p> 
            <p>Since pure nature has no ego or self-identity, losing yourself and observing all thought patterns allow you to recognize the conditioning and programming from your life that has no more value <em>in this moment</em> of pure wilderness immersion.</p>
            <p>The first power place, the waterfalls and all sounds from nature, allow you to use the continual emotional release patterns that come from falling water, to remove all distractions and unconscious mind activity. 
            <p>
              Further, to be in a ceremonial sweat lodge next to the water falls, praying and sweating in complete darkness and in communion with the entire group has immense therapeutic cleansing power. The power in the lodge recreates our own birth process. In that moment, you and all of us in the group, experience the collective sense of communal rebirth. One tribe, one body, one earth. </p>
            </p>
            <p>Dael has run sweat lodges in the United States, Canada, and across Europe. It is the unique combination of the power of falling water, the closeness to the fire, and the richness within the great spiritual and psychotherapeutic traditions of purification. </p>
            <img src={letGo} alt="Lao Tzu Quote" className="map" />
          <hr /> 

          <h2>3. Stopping Time</h2>
            <p> 
              Will you be able to recognize the new creativity that can change your life?
            </p> 
            <p>As the canoe journey deepens, in the silence and profoundness of the river, islands camping and ceremonies take us further into the inner matrix of our own souls' needs. In the middle of this journey, we now have the greatest opportunity to revisit our outer lives and affect core changes as we return. </p>
          <hr /> 
          <img src={ceremony} alt="Dael at a campfire" className="map" />

          <h2>4. Completion and Integration</h2>
            <p> 
              In the final moments we are profoundly aware of our love of the depth and beauty of the rivers journey.
            </p> 
            <p>
              Can you take this ancient timeless power fully back into your daily lives?
            </p>
            <p>We're here to help you in this exquisite and delicate transition from the inner world back into the outer.</p>
            <p>As simple as this sounds, the aboriginal world that we have been in has been lost in modern society. Now you have to preserve the wisdom of the ancient and the modern together in order to live as a full and complete human being.</p>
            <img src={complete} alt="People around a campfire" className="map" />

          <hr /> 

        </div>
      </div>

    </div>
  );
}

export default HelpContainer;
