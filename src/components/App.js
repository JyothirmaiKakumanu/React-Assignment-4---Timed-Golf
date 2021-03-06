import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 };
  }
  // componentDidMount() {
    
  // }

  // componentWillUnmount() {
    
  // }

  handleListener(event){
    switch(event.keyCode){
      case 39:
        this.setState(
          {x:this.state.x+5,}
          );
        break;
      
      case 40:
        this.setState(
          {y:this.state.y+5,}
          );
        break;
       
      case 38:
        this.setState(
          {y:this.state.y-5,}
          );
        break;
        
      case 37:
        this.setState(
          {x:this.state.x-5,}
          );
        break;
    }
  }

displayBall(){
  // if(this.state.time===0){
    document.addEventListener("keydown",this.handleListener);
  // }
}

  render() {
    return (
 <>
 <button className="start" onClick={this.displayBall}>Start</button>
</>
    );
  }
}

export default Timer;
