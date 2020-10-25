import React, { Component } from 'react'

import Header from "./Components/Header";
import AddTodoButton from "./Components/AddTodo/AddTodoButton"
import Todos from "./Components/Todos"

export default class App extends Component {
  state = {
    todos:[
      {
        id: 1,
        title: 'Take out the thrash',
        description: 'We have plenty of thrash in this world',
        Creationdate: '24/10/2000',
        CreationHour: '22:38',
        Priority: 'Strong',
        completed: true
      },
      {
        id: 2,
        title: 'diner with dogg',
        description: 'We have plenty of thrash in this world hi my name is miquel castro que tal',
        Creationdate: '24/10/2000',
        CreationHour: '22:38',
        Priority: 'Strong',
        completed: true
      },
      {
        id: 3,
        title: 'work like a niga',
        description: 'We have plenty of thrash in this world',
        Creationdate: '24/10/2000',
        CreationHour: '22:38',
        Priority: 'Strong',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    console.log(id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }


  render() {
    return (
      <div>
        <Header></Header>
        <AddTodoButton></AddTodoButton>
        <Todos MarkComplete={this.markComplete} Todos={this.state.todos}></Todos>
      </div>
    )
  }
}
