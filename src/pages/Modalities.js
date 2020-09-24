import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VerifiedUserSharpIcon from '@material-ui/icons/VerifiedUserSharp';
import HourglassEmptySharpIcon from '@material-ui/icons/HourglassEmptySharp';
import HourglassFullSharpIcon from '@material-ui/icons/HourglassFullSharp';

const listStyle = {
    width: '100%',
    maxWidth: 600,
    backgroundColor: 'white'
};

const Modalities = () => {
  return (
      <div className="container">
        <div className="container">
          <div className="help-right">
            <h1>Modalities</h1>
            <h3>
              The following are healing and growth modalities that I have used extensively to great positive effect. Working with me you will have access to all of my knowledge on how to use these modalities to accelerate your growth, healing, and create a sustainable healthy lifestyle that you can thrive in.
            </h3> 
            <h3>
              These modalities have <em>worked wonders</em> for me on my journey.
            </h3> 
            
            <p>
            </p>
            <div style={listStyle}>
              <List aria-label="Modality Key">
                <ListItem>
                  <ListItemIcon>
                    <VerifiedUserSharpIcon />
                  </ListItemIcon>
                  <ListItemText primary="Officially Certified Practitioner" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HourglassFullSharpIcon />
                  </ListItemIcon>
                  <ListItemText primary="10+ Years Experience" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HourglassEmptySharpIcon />
                  </ListItemIcon>
                  <ListItemText primary="5+ Years Experience" />
                </ListItem>
              </List>
            </div>
            <div style={listStyle}>
              <List aria-label="modalities">
                <ListItem>
                  <ListItemText 
                    primary="Life Coaching" 
                    secondary="Certified under the School of Achology - Academy of Modern Applied Psychology" />
                  <ListItemIcon>
                    <VerifiedUserSharpIcon />
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Ho'Oponopono" 
                    secondary="Incredible Ancient Hawaiian Practice for Clearing Stresses and Blocks" />
                  <ListItemIcon>
                    <VerifiedUserSharpIcon />
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Meditation" 
                    secondary="Mindfulness, Guided" />
                  <ListItemIcon>
                    <HourglassFullSharpIcon />
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Journaling" 
                    secondary="Dream, Daily" />
                  <ListItemIcon>
                    <HourglassFullSharpIcon />
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Yoga" 
                    secondary="Get Started with Vinyasa, Hatha, Kundalini" />
                  <ListItemIcon>
                    <HourglassFullSharpIcon />
                  </ListItemIcon>

                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Plant Medicine and/ or Psychedelic Medicine " 
                    secondary=" Preparation and Guidance" />
                  <ListItemIcon>
                    <HourglassFullSharpIcon />
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Spiritual Guidance" 
                    secondary="Knowledge, Empowerment and Affirmation" />
                  <ListItemIcon>
                    <HourglassFullSharpIcon />
                  </ListItemIcon>

                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Herbology and Food as Medicine" 
                    secondary="Encorporate Herbs and Healing Foods into Your Daily Life" />
                  <ListItemIcon>
                    <HourglassEmptySharpIcon />
                  </ListItemIcon>

                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Fasting" 
                    secondary="Guidance for Safe Intermittant, Water, and Dry Fasting" />
                  <ListItemIcon>
                    <HourglassEmptySharpIcon />
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Breathwork" 
                    secondary="Get Started with Wim Hof Method, Breath of Fire" />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Manifesting" 
                    secondary="Visualization, Clearing Blocks" />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Divination" 
                    secondary="Readings offered in Tarot & I Ching" />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Hot/ Cold Therapy" 
                    secondary="Your Guide to Saunas, Ice Baths, etc." />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Electro-Therapy" 
                    secondary="Patches and Wands for Safe Pain Relief and Nervous System Activation" />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="and More" 
                    secondary="There are many other modalities I've worked with and can guide you to" />
                </ListItem>
              </List>
            </div>
          </div>
        </div>

    </div>  
  );
}

export default Modalities;
