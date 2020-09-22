import React from 'react';
import tow_img from './logo512.png';
import tee_img from './logo_tee.png';

class GameRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header: props.header,
            desc: props.desc,
            release_date: props.release_date,
            image: props.image,
        }
    }
    render(){
        return (
            <div className="homepage_row">
                <div className="homepage_row_image_container">
                    <img src={this.state.image} className="homepage_row_image"/>
                </div>
                <div className="homepage_row_info">
                    <h1>{this.state.header}</h1>
                    <p>{this.state.desc}</p>
                    <hr></hr>
                    <p className="homepage_row_info_release">{this.state.release_date}</p>
                </div>
            </div>
          );
    }
}

class Homepage extends React.Component {
    render(){
      return (
        <div className="homepage">
            <GameRow 
                header="Town of Whispers" 
                desc="Explore the history of mysterious town in this short narrative-driven adventure story" 
                release_date="Coming December 2020" 
                image={tow_img}
            />
            <hr className="homepage_hr"></hr>
            <GameRow 
                header="The Echo Effect" 
                desc="It's like reading The Odyssey, from the perspective of Odysseus' crew" 
                release_date="Release TBD" 
                image={tee_img}/>
            <hr className="homepage_hr"></hr>
        </div>
      );
    }
}
  
export default Homepage;