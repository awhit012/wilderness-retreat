import React, { Component } from 'react';
import './Layout.css';
import {AppBar, Tabs, Tab} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import * as Colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Link } from 'react-router-dom';
// import Email from '@material-ui/icons/Email';


// import EmailForm from '../email-list/EmailForm';
// import MailchimpSubscribe from "react-mailchimp-subscribe"

const logo = "https://i.imgur.com/FhWIA8T.png";
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#00471E',
    accent1Color: 'White',
    alternateTextColor: '#6277a3'
  },
  appBar: {
    height: 60,
  },
});

const home =  <span> 
                <img src={logo} alt="logo" className="App-logo" />
                <span className="Company-Name">Ontario Wilderness Canoeing Retreat</span>
              </span>
            
// const emailIcon = <Email className="email-icon-bar" />
// const emailUrl = "https://fibroclarity.us18.list-manage.com/subscribe/post?u=ad9a911ff91053e376a7095c6&amp;id=fe6a4a5752"

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "default",
      email: "",
      emailError: ""
    };
    this.handleActive = this.handleActive.bind(this);
  }
  
  componentWillMount() {
    let urlPath = window.location.pathname;
    let currentTab = urlPath.split('/').pop();
    this.setState({ activeTab: currentTab || 'default' });
  }

  handleActive(tab) {
    this.setState({ activeTab: tab || 'default' });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <span>
          <AppBar iconElementLeft={(home)} className="App-Bar">
            <Tabs value={this.state.activeTab}>

              <Tab value="default" onActive={ () => this.handleActive("default") } className="tab" label="Home" containerElement={<Link to="/"/>}/>
              <Tab value="guides"   onActive={ () => this.handleActive("guides") } className="tab" label="Guides" containerElement={<Link to="/guides"/>}/>
              <Tab value="food"   onActive={ () => this.handleActive("food") } className="tab" label="Food" containerElement={<Link to="/food"/>}/>
              <Tab value="register"   onActive={ () => this.handleActive("register") } className="tab" label="Register" containerElement={<Link to="/register"/>}/>
              
            </Tabs>
          </AppBar>
        </span>
      </MuiThemeProvider>
    );
  }
}

export default NavBar;


