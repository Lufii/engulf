import React, { Component } from 'react';



class Say extends Component{
  constructor(props){
    super(props);
    this.state = {
      say: null
    }
  }
  render(){
    return(
      <div className='flames'>{this.props.say}</div>
    )}
  }

  export default Say;
