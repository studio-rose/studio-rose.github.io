import React from 'react';
import './App.css';

class Header extends React.Component {
    render(){
      return (
        <div className="header">
            <div className="header_content">
                {this.props.children}
            </div>
        </div>
      );
    }
}
  
export default Header;