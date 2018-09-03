import React, { Component } from 'react';
import './nav.css';
import logo from './logo.svg';
import Ask from './ask.jsx';
import Say from './say.jsx';

class Engulf extends Component {
  constructor(props){
    super(props);
    this.state={
      ask: null,
      say: 'blabla',
    }
  }


  render() {
    return (
      <div className='engulf'>
      <div className='nav'>

      <img src={logo} onClick={() => {
        alert(this.state.ask)
      }} className='app-logo' alt='logo'></img>

      <div className='engulf'>
      <h1>Welcome to Engulf</h1>
      <ul>
      <li onClick={() => {
        this.setState({ask: 'log'})
      }}>Log</li>
      <li onClick={() => {
        this.setState({ask: 'search'})
      }}>Search</li>
      <li onClick={() => {
        this.setState({ask: 'create'})
      }}>Create</li>
      <li onClick={() => {
        this.setState({ask: 'update'})
      }}>Update</li>
      <li onClick={() => {
        this.setState({ask: 'inbound'})
      }}>Inbound</li>
      <li onClick={() => {
        this.setState({ask: 'outbound'})
      }}>Outbound</li>
      </ul>
      </div>

      </div>
      <br/>
      <Ask ask={this.state.ask}/>
      <br/>
      <Say say={this.state.say}/>
      </div>
    )}
  }


  export default Engulf;
