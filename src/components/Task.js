import React, { Component } from 'react';
import propTypes from 'prop-types';

import './Task.css';

class Task extends Component {



  styleCompleted() {
    return {
      fontSize: '20px',
      color: this.props.task.done ? 'green' : 'black',
      textDecoration: this.props.task.done ? 'line-through' : 'none'
    }
  }

  render(){

    const {task} = this.props;
    const redColor = { background: 'red' }

    return(
      <div style={ this.styleCompleted() }>
        { task.title } - 
        { task.done } - 
        { task.description } - 
        { task.id }
        <input type="checkbox" onChange={ this.props.checkDone.bind(this, task.id) } />
        <button onClick={ this.props.deleteTask } style={ btnDelete }>x</button>
      </div>


    );
  }

  activate() {
    console.log('asadf')
  }

}

Task.propTypes = {
  task: propTypes.object.isRequired
}

const btnDelete = {
  fontSize: '18px',
  color: 'red'
}

export default Task;