import React from 'react';
import './App.css';

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
      return (
        <div className="footer">
            <div className="footer_text">&#169; Studio Rose 2016-2020</div>
        </div>
      );
    }
  }
  
  export default Footer;