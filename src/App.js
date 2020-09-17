import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu.js';
import Content from './Content.js';
import toc from './table_of_contents.yaml';

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
      <div className="App">
        <Menu></Menu>
        <Content></Content>
      </div>
    );
  }
}

export default App;
