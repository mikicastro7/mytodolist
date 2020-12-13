import React, { Component } from 'react'

import Header from "./Components/Header";
import AddTodoButton from "./Components/AddTodo/AddTodoButton"
import Todos from "./Components/Todos"
import Axios from 'axios';

export default class App extends Component {
  state = {
    todos:[]
  }

  componentDidMount() {
    Axios.get('userTodos')
      .then(response => {
        this.setState({todos : response.data.todo})
      })
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          
          Axios({
            method: 'patch',
            url: 'todo/' + id,
            data: {
              completed : !todo.completed
            }
          });
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
          Axios({
            method: 'patch',
            url: 'todo/' + id,
            data: {
              title : title,
              description : description,
              priority : priority
            }
          });
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
    Axios.delete('todo/' + id)

  }

  addTodo = (title, description, priority) => {
    Axios({
      method: 'post',
      url: '/todo',
      data: {
        title : title,
        description : description,
        priority : priority,
        completed : false,
      }
    }).then(response =>{
      const newTodo = {
        id : response.data.todo.id,
        title: title,
        description: description,
        priority: priority,
        completed: false,
        created_at : response.data.todo.created_at
      }
      this.setState({
        todos : [...this.state.todos, newTodo]
      })
    });

    
    
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
