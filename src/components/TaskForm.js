import React, { Component } from 'react';

export default class TaskForm extends Component {

  state = {
    title: '',
    description: ''
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    this.props.addTask(this.state.title, this.state.description);
  }

  onChange = (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })
    // console.log( this.state )
    
  }

  render(){
    
    return (
      <form onSubmit={ this.onSubmit }>
        <input name="title" type="text" placeholder="Write a Task" onChange={ this.onChange } value={ this.state.title } ></input>
        <br></br>
        <textarea name="description" placeholder="Write a Description" onChange={ this.onChange } value={ this.state.description } ></textarea>
        <br></br>
        <input value="Enviar" type="submit"></input>
      </form>
    )
  }

}


