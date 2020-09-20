import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu.js';
import Footer from './Footer.js';
import Content from './Content.js';
import toc from './table_of_contents.yaml';
import Header from './Header';

class App extends React.Component {
  getDocs(){
    return toc.posts;
  };

  render(){
    const numbers = this.getDocs();
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
    );
    return (
      <div className="app">
        <Menu></Menu>
        <Header>
          <div>Town of Whispers</div>
        </Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
