import React from 'react';
import './App.css';
import logo from './logo512.png';
import {NavLink} from 'react-router-dom';

import {ReactComponent as RedditIcon} from './icons/reddit.svg';
import {ReactComponent as FbIcon} from './icons/facebook.svg';
import {ReactComponent as TwitterIcon} from './icons/twitter.svg';
import {ReactComponent as EmailIcon} from './icons/email.svg';

class MenuButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.value,
            link: props.link
        }
    }
    render(){
        return (
            <NavLink to={this.state.link} activeClassName="menu_button_active" className="menu_button">
                <div className="menu_button_text">{this.state.link}</div>
            </NavLink>
        );
      }
}

class MenuBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            buttons: ["Home", "About", "Blog", "Extra"],
        }
    }
    createButtons(){
        const buttons = this.state.buttons;
        const listItems = buttons.map((str) =>
            <MenuButton key={str} link={str} />
        );
        return listItems;
    }
    render(){
        const buttons = this.createButtons();
        return (
            <div className="menu_button_bar">{buttons}</div>
        );
    }
}

class SocialMediaLinks extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="social_links">
                <RedditIcon/>
                <TwitterIcon/>
                <a href="mailto:jkgathof@gmail.com"><EmailIcon/></a>
            </div>
        );
    }
}

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
      return (
        <div className="menu">
            <img src={logo} className="image"/>
            <div className="studio_title">Studio Rose</div>
            <SocialMediaLinks/>
            <div className="menu_spacing"></div>
            <MenuBar />
        </div>
      );
    }
  }
  
  export default Menu;