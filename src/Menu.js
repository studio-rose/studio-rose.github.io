import React from 'react';
import './App.css';
import logo from './logo512.png';
import {NavLink} from 'react-router-dom';

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
    createButton(){
        const buttons = this.state.buttons;
        const listItems = buttons.map((str) =>
            <MenuButton key={str} link={str} />
        );
        return listItems;
    }
    render(){
        const buttons = this.createButton();
        return (
            <div className="menu_button_bar">{buttons}</div>
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
        <div className="Menu">
            <img src={logo} className="image"/>
            <div className="studio_title">Studio Rose (Dev)</div>
            <div className="menu_spacing"></div>
            <MenuBar />
            { /* <Bars className="three_bars"/> */ }
        </div>
      );
    }
  }
  
  export default Menu;