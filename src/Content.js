import React from 'react';
//import Sidebar from './Sidebar.js'
import Post from './Post.js'
import './App.css';
import test1 from './test1.md';
import {Route} from 'react-router-dom';

import Homepage from './Homepage.js';

class Content extends React.Component {
    render(){
        const p = <Post key="test1">{test1}</Post>;
      return (
        <div className="content">
            <Route path='/Blog'>{p}</Route>
            <Route path='/Home'><Homepage/></Route>
        </div>
      );
    }
}
  
export default Content;