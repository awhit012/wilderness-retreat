import React, { Component } from 'react';
import './Layout.css';
import {AppBar, Tabs, Tab} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as Colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Link } from 'react-router-dom';
import Email from '@material-ui/icons/Email';


import EmailForm from '../email-list/EmailForm';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const logo = "/images/logo.png";
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#D6C3B5',
    accent1Color: 'White',
    alternateTextColor: '#6277a3'
  },
  appBar: {
    height: 60,
  },
});

const home =  <span> 
                <img src={logo} alt="fibroclarity logo" className="App-logo" />
                <span className="Company-Name">VALA DAWN</span>
              </span>
            
const emailIcon = <Email className="email-icon-bar" />
const emailUrl = "https://fibroclarity.us18.list-manage.com/subscribe/post?u=ad9a911ff91053e376a7095c6&amp;id=fe6a4a5752"

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

              <Tab value="default" onActive={ () => this.handleActive("default") } className="tab" label="Sessions" containerElement={<Link to="/"/>}/>
              <Tab value="about"   onActive={ () => this.handleActive("about") } className="tab" label="About" containerElement={<Link to="/about"/>}/>
              <Tab value="blog"   onActive={ () => this.handleActive("blog") } className="tab" label="Blog" containerElement={<Link to="/blog"/>}/>

            </Tabs>
          </AppBar>
          {/* <AppBar iconElementLeft={(emailIcon)} className="App-Bar"> */}
          {/*   <span className="ebook">Free Digital Course: Spirituality & Trauma 101 </span> */}
          {/*   <MailchimpSubscribe */}
          {/*     url={emailUrl} */}
          {/*     render={({ subscribe, status, message }) => ( */}
          {/*       <EmailForm */}
          {/*         status={status} */}
          {/*         message={message} */}
          {/*         onValidated={formData => subscribe(formData)} */}
          {/*       /> */}
          {/*     )} */}
          {/*   /> */}
          {/* </AppBar> */}
        </span>
      </MuiThemeProvider>
    );
  }
}

export default NavBar;


