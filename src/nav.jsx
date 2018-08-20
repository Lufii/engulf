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


  render() {
    return (
<div className='nav'>

  <img src={logo} onClick={() => {
    alert(this.state.value)
  }} className='app-logo' alt='logo'></img>

  <div className='engulf'>
    <h1>Welcome to Engulf</h1>
    <ul>
      <li onClick={() => {
        this.setState({value: 'log'})
      }}>Log</li>
      <li onClick={() => {
        this.setState({value: 'search'})
      }}>Search</li>
      <li onClick={() => {
        this.setState({value: 'create'})
      }}>Create</li>
      <li onClick={() => {
        this.setState({value: 'update'})
      }}>Update</li>
      <li onClick={() => {
        this.setState({value: 'inbound'})
      }}>Inbound</li>
      <li onClick={() => {
        this.setState({value: 'outbound'})
      }}>Outbound</li>
    </ul>
  </div>
  <br/>
  <Input ask={this.state.value}/>
  <br/>
  <Output />
</div>
)}
}

class Input extends Component{
  render(){
  if(this.props.ask=='create')
    return(
    <div className='search'>
      <input type='text' placeholder="Product Name"></input>
      <button onClick={() => {
        alert(this.props.thing)
      }} type='submit'>Submit</button>
    </div>
  )
else {
  return null
}}
}

class Output extends Component{
  render(){
    return(
    <div className='flames'>Output</div>
  )}
}





export default Nav;
