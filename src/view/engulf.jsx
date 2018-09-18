import React, { Component } from 'react';
import './nav.css';
import logo from './logo.svg';
const axios = require('axios');


class Engulf extends Component {
  constructor(props){
    super(props);
    this.state={
      nav: 'initial',
      say: null,
    }
  }

  passNav = (passNavVal) => {
        this.setState({nav: passNavVal})
    }

  passSay = (passSayVal) =>{
        this.setState({say: passSayVal})
  }


  render() {
    return (
      <div className='engulf'>
      <Logo />
      <Nav navChange={this.passNav}/>
      <Ask navVal={this.state.nav} sayChange={this.passSay}/>
      <br/>
      <Say sayVal={this.state.say}/>
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
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
    var self2 = this.props;
    self2.sayChange('Loading...');
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
      self2.sayChange(self.name+' create successful');
      return response;
    }).catch(function (error){
      console.log(error);
      self2.sayChange(self.name+' create unsuccessful. Please make sure the product name does not already exist.');
      console.log(self.say);
    })

  }

  handleUpdate(event){
    event.preventDefault();
    var self = this.state;
    var self2 = this.props;
    self2.sayChange('Loading...');
    axios({
      method:'POST',
      url:'https://pluckforengulf.herokuapp.com/product/update',
      data:{
        name: self.name,
        type: self.type,
        area: self.area,
        stock: self.stock,
        mppb: self.mppb,
      },
    }).then(function (response){
      console.log(response);
      if(response.status === 200 && response.data.nModified!==0){
      self2.sayChange(self.name+' update successful');
      return response;
    } else{
      self2.sayChange(self.name+' update unsuccessful. Please make sure the name exists and the values are not unchanged.');
    }}).catch(function (error){
      console.log(error);
      self2.sayChange(self.name+' update unsuccessful. Please double check the name.');
      console.log(self.say);
    })

  }

  handleSearch(event){
    event.preventDefault();
    var self2 = this.props;
    self2.sayChange('Loading...');
    console.log('Search pressed');
    const self = this.state;
    console.log(this.state.say)
    axios({
      method:'GET',
      url:'https://pluckforengulf.herokuapp.com/product?name='+self.name,
    }).then(function (response){
      console.log(response);
      var sRes = response.data[0];
      self2.sayChange(sRes.name+' / Type: '+sRes.type+' / Area: '+sRes.area+' / Stock: '+sRes.stock+' / Mppb: '+sRes.mppb);
    }).catch(function (error){
      console.log(error);
      console.log(self.name+" not found.");
      self2.sayChange(self.name+' not found');
    })

  }

  handleDelete(event){
    event.preventDefault();
    var self2 = this.props;
    self2.sayChange('Loading...');
    console.log('Delete pressed');
    const self = this.state;
    console.log(this.state.say)
    axios({
      method:'POST',
      url:'https://pluckforengulf.herokuapp.com/product/delete',
      data:{
        name: self.name,
      },
    }).then(function (response){
      console.log(response);
      self2.sayChange(self.name+' deleted');
    }).catch(function (error){
      console.log(error);
      console.log(self.name+" not found.");
      self2.sayChange(self.name+' not deleted. Please double check product name');
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
<form className='ask' onSubmit={this.handleUpdate}>
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
<form className='ask' onSubmit={this.handleDelete}>
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
      <div className='say'>
{this.props.sayVal}
      </div>
    );
  }
}

  export default Engulf;
