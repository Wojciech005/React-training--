import React, { Component } from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask'
import  './App.css'

class App extends Component {

  counter = 7
  
  state = {
    tasks : [
      // {
      //   id: 0,
      //   text: 'task 1'
      // },
      // {
      //   id: 1,
      //   text: 'task 2'
      // }
    ]
  }

  addTask = (text) => {
    if(this.state.tasks.length < 8) {
   const tasks = 
        {
        id: this.counter,
        text: text
      }
      this.counter++
      console.log(tasks)

      this.setState(prevState => ({
        tasks: [...prevState.tasks, tasks]
      }))
      
    } else {
      return(
        alert('max 8 tasks')
      )
    }
      return true
    }
    
deleteTask = (id) => {
  console.log('dziala usuwanie poprzez app')
  const tasks = [...this.state.tasks]
  const index = tasks.findIndex(task => tasks.id === id)
  tasks.splice(index, 1)

  this.setState({
    tasks
  })
}
  
  

  render() {
    return (
      <div className="wrap">
            <h1 className="title" >to do list:</h1>
            <span>Tasks number: <strong>{this.state.tasks.length}</strong></span>
            
         
        <AddTask add = {this.addTask} task = {this.state.tasks}/>
        <TaskList tasks ={this.state.tasks} delete={this.deleteTask} />
       
    
      </div>
    )
  }
}


export default App