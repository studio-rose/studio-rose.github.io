import React from 'react';
import './App.css';
import {ReactComponent as Right} from './right.svg';

class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: true,
        }
        this.toggle_expanded = this.toggle_expanded.bind(this);
    }
    toggle_expanded(){
        this.setState(state => ({
            expanded: !state.expanded 
        }));
    }

    render(){
      return (
        <div className="sidebar">
            <div className="sidebar_expander">
                <Right className='sidebar_arrow' onClick={this.toggle_expanded} />
            </div>
            <div className="sidebar_content">
                {}
            </div>
        </div>
      );
    }
}
  
export default Sidebar;