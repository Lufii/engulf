import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {



  render() {
    return (
<div className='App'>

  <img src={logo} className='app-logo' alt='logo'></img>

  <div className='engulf'>
    <h1>Welcome to Engulf</h1>
    <ul>
      <li>Log</li>
      <li>Search</li>
      <li onClick={createItem}>Create</li>
      <li>Update</li>
      <li>Inbound</li>
      <li>Outbound</li>
    </ul>
  </div>
</div>
)}
}

class Search extends Component{
  render(){
    return(
    <div className='search'>
      <input type='text' placeholder="Product Name"></input>
      <button type='submit'>Submit</button>
    </div>
  )}
}

class Flames extends Component{
  render(){
    return(
    <div className='flames'></div>
  )}
}





export default App;

<style>

</style>

function createItem(){
  alert('click');
}
