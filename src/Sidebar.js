import React from 'react';
import './App.css';
import {ReactComponent as Right} from './right.svg';

class Sidebar extends React.Component {
    render(){
      return (
        <div className="sidebar">
            <div className="sidebar_expander">
                <Right className='sidebar_arrow' />
            </div>
            <div className="sidebar_content">sidebar</div>
        </div>
      );
    }
}
  
export default Sidebar;