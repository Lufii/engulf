import React, { Component } from 'react';
import './nav.css';
import logo from './logo.svg';


class Engulf extends Component {
  constructor(props){
    super(props);
    this.state={
      nav: 'initial',
      ask: 'initial',
      say: 'initial',
    }
  }

  passNav = (passNavVal) => {
        this.setState({nav: passNavVal})
    }


  render() {
    return (
      <div className='engulf'>
      <Logo />
      <Nav navChange={this.passNav}/>
      <Ask navVal={this.state.nav}/>
      <Say />
      <br/><br/><br/><br/>
      <button onClick= {()=>{alert(this.state.nav)}}>navVal</button><br/>
      <button onClick= {()=>{alert(this.state.ask)}}>askVal</button>
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
  render(){
    return (
      <div class='nav'>
      <ul>
      <li onClick={() => {
        this.props.navChange('search')
      }}>Search</li>
      <li onClick={() => {
        this.props.navChange('create')
      }}>Create</li>
      <li onClick={() => {
        this.props.navChange('update')
      }}>Update</li>
      <li onClick={() => {
        this.props.navChange('delete')
      }}>Delete</li>
      </ul>
      </div>
    );
  }
}

class Ask extends Component {
  render(){
      if(this.props.navVal==='create')
          return(
<form class='ask'>
            <input type='text'  placeholder="Product name"></input>
            <input type='text'  placeholder="Product type"></input>
            <input type='text'  placeholder="Warehouse area"></input>
            <input type='number'  placeholder="Stock"></input>
            <input type='number'  placeholder="Meters or pieces per box"></input>
            <input type='submit' value='Create'></input>
</form>
          )
          else
      if(this.props.navVal==='search')
          return(
<form class='ask'>
            <input type='text'  placeholder="Product name"></input>
            <input type='submit'></input>
</form>
          )
          else
      if(this.props.navVal==='update')
          return(
<form class='ask'>
            <input type='text' placeholder="Product name"></input>
            <input type='text' placeholder="Product type"></input>
            <input type='text' placeholder="Warehouse area"></input>
            <input type='number' placeholder="Stock"></input>
            <input type='number' placeholder="Meters or pieces per box"></input>
            <input type='submit' value='Update'></input>
</form>
        )
else {
  if(this.props.navVal==='delete')
      return(
<form class='ask'>
        <input type='text'  placeholder="Product name"></input>
        <input type='submit'></input>
</form>
      )
      else {
        return(null);
      }
}

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
