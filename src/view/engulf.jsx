import React, { Component } from 'react';
import './nav.css';
import logo from './logo.svg';


class Engulf extends Component {
  constructor(props){
    super(props);
    this.state={
      ask: null,
      say: null,
    }
  }


  render() {
    return (
      <div className='engulf'>
      <Logo />
      <Nav />
      <Ask />
      <Say />
      </div>);
  }
  }

  class Logo extends Component {
    render(){
      return(
        <div class='logo'>
        <img src={logo} onClick={() => {
          alert(this.state.ask)
        }} className='app-logo' alt='logo'></img>

        <h1>Welcome to Engulf</h1>
        </div>
      );
    }
  }

class Nav extends Component{
  constructor(props){
    super(props);
    this.state={
      ask: null,
    }
  }

  render(){
    return (
      <div class='nav'>
      <ul>
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
        this.setState({ask: 'delete'})
      }}>Delete</li>
      </ul>
      </div>
    );
  }
}

class Ask extends Component {
  render(){
    return(
      <div class='ask'>

      </div>
    );
  }
}

class Say extends Component {
  render(){
    return(
      <div class='ask'>

      </div>
    );
  }
}

  export default Engulf;
