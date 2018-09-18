import React, { Component } from 'react';
import './nav.css';
import logo from './logo.svg';
const axios = require('axios');


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
        <div className='logo'>
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
      <div className='nav'>
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
  constructor(props){
    super(props);
    this.state = {
      axiosResponse: 'initial',
      name:'',
      type:'',
      area:'',
      stock: '',
      mppb: '',
    };
//Below, state updaters for each field.
    this.handleName = this.handleName.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleArea = this.handleArea.bind(this);
    this.handleStock = this.handleStock.bind(this);
    this.handleMppb = this.handleMppb.bind(this);

    this.handleCreate = this.handleCreate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleName(event){
    this.setState({name: event.target.value.toUpperCase()});
  }

  handleType(event){
    this.setState({type: event.target.value});
  }

  handleArea(event){
    this.setState({area: event.target.value});
  }

  handleStock(event){
    this.setState({stock: event.target.value});
  }

  handleMppb(event){
    this.setState({mppb: event.target.value});
  }

  handleCreate(event){
    event.preventDefault();
    var self = this.state;
    axios({
      method:'POST',
      url:'https://pluckforengulf.herokuapp.com/product/create',
      data:{
        name: self.name,
        type: self.type,
        area: self.area,
        stock: self.stock,
        mppb: self.mppb,
      },
    }).then(function (response){
      console.log(response);
      if(response.status === 200){}
      self.say = 'Create successful';
      console.log(self.say);
      return response;
    }).catch(function (error){
      console.log(error);
      self.say = 'Create unsuccessful';
      console.log(self.say);
    })

  }

  handleSearch(event){
    event.preventDefault();
    console.log('Search pressed');
    const self = this.state;
    console.log(this.state.say)
    axios({
      method:'GET',
      url:'https://pluckforengulf.herokuapp.com/product?name='+self.name,
    }).then(function (response){
      console.log(response);
    }).catch(function (error){
      console.log(error);
      console.log(self.name+" not found.");
      alert(self.name+" not found.");
    })

  }

  render(){
      if(this.props.navVal==='create')
          return(
<form className='ask' onSubmit={this.handleCreate}>
            <input type='text' value={this.state.name} onChange={this.handleName} placeholder="Product name"></input>
            <input type='text' value={this.state.type} onChange={this.handleType} placeholder="Product type"></input>
            <input type='text' value={this.state.area} onChange={this.handleArea} placeholder="Warehouse area"></input>
            <input type='number' value={this.state.stock} onChange={this.handleStock} placeholder="Stock"></input>
            <input type='number' value={this.state.mppb} onChange={this.handleMppb} placeholder="Meters or pieces per box"></input>
            <input type='submit' value='Create'></input>
</form>
          )
          else
      if(this.props.navVal==='update')
          return(
<form className='ask'>
            <input type='text' value={this.state.name} onChange={this.handleName} placeholder="Product name"></input>
            <input type='text' value={this.state.type} onChange={this.handleType} placeholder="Product type"></input>
            <input type='text' value={this.state.area} onChange={this.handleArea} placeholder="Warehouse area"></input>
            <input type='number' value={this.state.stock} onChange={this.handleStock} placeholder="Stock"></input>
            <input type='number' value={this.state.mppb} onChange={this.handleMppb} placeholder="Meters or pieces per box"></input>
            <input type='submit' value='Update'></input>
</form>
        )
          else
      if(this.props.navVal==='search')
        return(
<form className='ask' onSubmit={this.handleSearch}>
          <input type='text' value={this.state.name} onChange={this.handleName} placeholder="Product name"></input>
          <input type='submit' value='Search'></input>
</form>
        )
else {
  if(this.props.navVal==='delete')
      return(
<form className='ask'>
        <input type='text' value={this.state.name} onChange={this.handleName} placeholder="Product name"></input>
        <input type='submit' value='Delete'></input>
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
      <div className='ask'>

      </div>
    );
  }
}

  export default Engulf;
