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
        creationdate: '24/10/2000',
        creationHour: '22:38',
        priority: 'Low',
        completed: true
      },
      {
        id: 2,
        title: 'diner with dogg',
        description: 'We have plenty of thrash in this world hi my name is miquel castro quesnldjnn lajndla djla sjla djas dj ajd ajd jas djass djandjandjlansjd a dsaj d tal asda dsd asdsadm',
        creationdate: '24/10/2000',
        creationHour: '22:38',
        priority: 'Medium',
        completed: true
      },
      {
        id: 3,
        title: 'work like a niga',
        description: 'We have plenty of thrash in this world',
        creationdate: '24/10/2000',
        creationHour: '22:38',
        priority: 'Low',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  editTodo = (id, title, description, priority) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
            todo.title = title
            todo.description = description
            todo.priority = priority
        }
        return todo
      })
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => 
        todo.id !== id
      )
    })
  }

  getActualDate = () => {
    let today = new Date(); 

    let dd = today.getDate(); 
        let mm = today.getMonth() + 1; 
  
        let yyyy = today.getFullYear(); 
        if (dd < 10) { 
            dd = '0' + dd; 
        } 
        if (mm < 10) { 
            mm = '0' + mm; 
        } 
        return today = dd + '/' + mm + '/' + yyyy; 
  }

  getActualHour = () => {
    let today = new Date();
    return today.getHours() + ":" + today.getMinutes()
  }

  addTodo = (title, description, priority) => {
    const newTodo = {
      id : this.state.todos.length + 1,
      title: title,
      description: description,
      creationdate: this.getActualDate(),
      creationHour: this.getActualHour(),
      priority: priority,
      completed: false
    }
    this.setState({
      todos : [...this.state.todos, newTodo]
    })
  }


  render() {
    return (
      <div>
        <Header></Header>
        <AddTodoButton AddTodo={this.addTodo}></AddTodoButton>
        <Todos EditTodo={this.editTodo} DeleteTodo={this.deleteTodo} MarkComplete={this.markComplete} Todos={this.state.todos}></Todos>
      </div>
    )
  }
}
