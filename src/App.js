import React, { Component } from 'react';
import './App.css';

import tasks from './sample/tasks.json';

import Tasks from './components/Tasks';

// form

import TaskForm from './components/TaskForm';
import Task from './components/Task';

import Posts from './components/Posts';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description)=> {
   
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    console.log(newTask)
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTaks = this.state.tasks.filter( task => task.id !== id );
    this.setState({ tasks: newTaks });
    console.log(newTaks);
  }

  checkDone = id => {
     const newTasks = this.state.tasks.map( task => {
      if(task.id === id) {
        task.done = !task.done;
      }

      return task;
    } );

    this.setState({ tasks : newTasks });

  }

  

  render(){
    return(
      <div>
        <Router>

        <Link to="/">Home</Link>
        <br></br>
        <Link to="/posts">Posts</Link>


        <Route exact path="/" render={ ()=>{ 
         return  <div>

          <TaskForm addTask={this.addTask}></TaskForm>

          <Tasks checkDone = { this.checkDone } deleteTask = { this.deleteTask } tasks={ this.state.tasks }></Tasks>

          </div>
        

         } }>

        </Route>
        <Route path="/posts" component={ Posts }></Route>
        </Router>
        
        

        
      </div>
    );

  }

}



export default App;
