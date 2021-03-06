import React, { Component, useState } from "react";
import "../styles/App.css";
var timeInterval = 0;
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 };
    this.displayBall = this.displayBall.bind(this);
    this.handleListener = this.handleListener.bind(this);
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
    if(this.state.x==250 && this.state.y ==250){
    
      document.removeEventListener("keydown",this.handleListener);
      this.interval();
    }
  }

  
interval(){
  if(this.state.time==0){
    timeInterval = setInterval(()=>{this.setState({time: this.state.time+1})},1000);
  }
  if(this.state.x==250 && this.state.y==250){
    clearInterval(timeInterval);
  }
}

displayBall(){
  if(this.state.time==0){
    this.interval();
    document.addEventListener("keydown",this.handleListener);
  }
  

}

  render() {
    return (
 <>
 <div className="ball" style={{left : this.state.x, top : this.state.y}}></div>
 <div className="hole"></div>
 <button className="start" onClick={this.displayBall}>Start</button>
 <div className="heading-timer">{this.state.time}</div>
</>
    );
  }
}

export default Timer;
