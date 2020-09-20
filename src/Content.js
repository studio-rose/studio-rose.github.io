import React from 'react';
import Sidebar from './Sidebar.js'
import Post from './Post.js'
import './App.css';
import test1 from './test1.md';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class Content extends React.Component {
    render(){
        const p = <Post key="test1">{test1}</Post>;
      return (
        <div className="content">
            <Route path='/Blog'>
                {p}
            </Route>
        </div>
      );
    }
}
  
export default Content;