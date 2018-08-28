import React, { Component } from 'react';
import logo from './logo.svg';
import './nav.css';
const axios = require('axios');

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
  constructor(props){
    super(props);
    this.state = {
      name:'',
      type:'',
      area:'',
      stock: '',
      mppb: '',
  };
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
    console.log('Controllable create pressed');
    const passState = this.state;
    axios({
    method:'POST',
    url:'https://pluckforengulf.herokuapp.com/product/create',
    data:{
    name: passState.name,
    type: passState.type,
    area: passState.area,
    stock: passState.stock,
    mppb: passState.mppb,
    },
    }).then(function (response){
    console.log(response);
    }).catch(function (error){
    console.log(error);
    console.log(passState.name+" not created. No duplicate names, please.");
    alert(passState.name+" not created. No duplicate names, please.");
    })

    event.preventDefault();
  }


  handleSearch(event){
    event.preventDefault();
    console.log('Search pressed');
    const passState = this.state;
    axios({
    method:'GET',
    url:'https://pluckforengulf.herokuapp.com/product?name='+passState.name,
    }).then(function (response){
    console.log(response);
    }).catch(function (error){
    console.log(error);
    console.log(passState.name+" not found.");
    alert(passState.name+" not found.");
    })


  }



  render(){
  if(this.props.ask==='create')
    return(
    <form className='inputt' id='iCreate' onSubmit={this.handleCreate}>
      <input type='text' value={this.state.name} onChange={this.handleName} placeholder="Product name"></input>
      <input type='text' value={this.state.type} onChange={this.handleType} placeholder="Product type"></input>
      <input type='text' value={this.state.area} onChange={this.handleArea} placeholder="Warehouse area"></input>
      <input type='number' value={this.state.stock} onChange={this.handleStock} placeholder="Stock"></input>
      <input type='number' value={this.state.mppb} onChange={this.handleMppb} placeholder="Meters or pieces per box"></input>
      <input type='submit' value='Create'></input>
    </form>
  )
else
  if(this.props.ask==='search')
    return(
      <form className='inputt' id='iSearch' onSubmit={this.handleSearch}>
        <input type='text' value={this.state.name} onChange={this.handleName} placeholder="Product name"></input>
        <input type='submit' value='Search'></input>
      </form>
    )
else
if(this.props.ask==='update')
  return(
  <div className='inputt' id='iUpdate'>
  <input type='text' placeholder="Product name"></input>
  <input type='text' placeholder="Product type"></input>
  <input type='text' placeholder="Warehouse area"></input>
  <input type='number' placeholder="Stock"></input>
  <input type='number' placeholder="Pieces or meters per box"></input>
    <button onClick={() => {



/*
   axios.post('https://localhost:3000/product/create',{
     name: 'asd',
     type: 'ccc'
   }).then(function (response){
     console.log(response);
   }).catch(function (error){
    console.log(error);
   })
*/








console.log('search button pushed');
}}
type='submit'>Update</button>
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
