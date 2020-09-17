import React from 'react';
import Sidebar from './Sidebar.js'
import Post from './Post.js'
import './App.css';
import test1 from './test1.md';

class Content extends React.Component {
    render(){
      return (
        <div className="content">
            {/*<Sidebar></Sidebar>
            <Post source={test1}></Post> */}
        </div>
      );
    }
}
  
export default Content;