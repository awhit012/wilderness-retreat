import React, { Component } from 'react';
// import ReactPlayer from "react-player"
import Button from '@material-ui/core/Button';
import '../help/Help.css';

const food = "/images/Campfire-Cooking.jpg";

class Food extends Component {
  render() {
    return (
    <div className="container">
    	<h1>Food & Provisions</h1>
      <h2>Pro Quality Healthy Cuisine</h2>
      <hr /> 
      <img src={food} alt="food" className="map" />
      <hr /> 
      <p>With both Dael and Alex having professional backgrounds as cooks and caterers, our <em>vegetarian</em> menu is highlighted by food dishes from all over the world. As a world traveler, Dael has learned to integrate recipes coming from tex mex campfire flavors from his many years living in Mayan Central America.</p>    	
      <p>On the other hand, as a vegetarian cook for more than 50 years Dael brings in his expertise from ayuverdic traditions, the curries of Tailand, and the macrobiotic flavors of Japan. It is our dedication and challenge to provide you with exquisite, high protien, campfire flavors and full pots right to the end of the journey.</p>
      <p>Through his wildcrafting business Dael is also dedicated to providing fresh food, catching <em>fresh fish,</em> and gathering wild edibles and plant medicinals such as wild mushrooms, and pine and cedar bark. We are learning to live and integrate with the primal power of nature, and any wild foods that we gather or catch will highlight our abilities to live off the land.</p>
      <p>Alex has eight years of experience as a professional cook and chef in both restaurants and in catering including fine dining, and loves to cook at home. He specializes in cooking whole food meals from scratch, inspired by the cooking of his homesteading German grandmother, who cooked fresh amazing meals from their garden.</p>
      <p>For safety reasons (attracting bears) we will not be bringing or cooking any  raw meat. However, for those who prefer to have meat protein in their diet, please feel free to bring along dried or cured meat, such as jerky, so long as the packaging can be completely sealed. Additionally, there will be opportunity to catch, cook, and eat wild fish from the river.</p>
    </div>	
    );
  }
}

export default Food;



