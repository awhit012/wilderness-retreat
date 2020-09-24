import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Layout.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import Email from '@material-ui/icons/Email';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import YouTubeIcon from '@material-ui/icons/YouTube';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title">
            {/* <a href="https://www.youtube.com/channel/UCFIvAwDouMS3OjBPU16uF7w" target="_blank" rel="noopener noreferrer"><YouTubeIcon className="email-icon"></YouTubeIcon> YouTube Channel </a> */}
            <a className="white" href="https://www.instagram.com/valadawn/" target="_blank" rel="noopener noreferrer"><InstagramIcon className="email-icon"></InstagramIcon> Instagram </a>
            <a className="white" mailto="valadawn@gmail.com" target="_blank" rel="noopener noreferrer"><Email className="email-icon"></Email> valadawn@gmail.com </a>
            {/* <a href="https://medium.com/@awhit012" target="_blank" rel="noopener noreferrer"><MenuBookIcon className="email-icon"></MenuBookIcon> Blog </a> */}

          </Typography>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);