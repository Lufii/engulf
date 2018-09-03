import React, { Component } from 'react';
const axios = require('axios');

class Ask extends Component{
  constructor(props){
    super(props);
    this.state = {
      axiosResponse: 'initial',
      ask: '',
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
      if(response.status ===200)
      return response;
    }).catch(function (error){
      console.log(error);
    })

  }


  handleSearch(event){
    event.preventDefault();
    console.log('Search pressed');
    const self = this.state;

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
      <input type='submit' value='Update'></input>
</div>
)
else {
  return null
}}
}

export default Ask;
