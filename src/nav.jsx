import React, { Component } from 'react';
import logo from './logo.svg';
import './nav.css';

class Nav extends Component {
  constructor(props){
  super(props);
  this.state={
    value: null,
  }
  }


  ask(act){
alert(act);
return(act)
}
  render() {
    return (
<div className='nav'>

  <img src={logo} onClick={() => {
    alert(this.state.value)
  }} className='app-logo' alt='logo'></img>

  <div className='engulf'>
    <h1>Welcome to Engulf</h1>
    <ul>
      <li>Log</li>
      <li>Search</li>
      <li onClick={() => {
        this.setState({value: 'create'})
        //alert(this.state.value)
      }}>Create</li>
      <li>Update</li>
      <li>Inbound</li>
      <li>Outbound</li>
    </ul>
  </div>
  <br/>
  <Input />
  <br/>
  <Output />
</div>
)}
}

class Input extends Component{
  constructor(props){
  super(props);
  this.state={
    value: null,
  }
  }

  render(){
    return(
    <div className='search'>
      <input type='text' placeholder="Product Name"></input>
      <button onClick={() => {
        alert(this.state.value)
      }} type='submit'>Submit</button>
    </div>
  )}
}

class Output extends Component{
  render(){
    return(
    <div className='flames'>Output</div>
  )}
}





export default Nav;
