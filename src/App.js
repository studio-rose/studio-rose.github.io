import React from 'react';
import './App.css';
import Menu from './Menu.js';
import Footer from './Footer.js';
import Content from './Content.js';
import Header from './Header';

class App extends React.Component {
  render(){
    return (
      <div className="app">
        <Menu></Menu>
        <Header>
          <div></div>
        </Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
