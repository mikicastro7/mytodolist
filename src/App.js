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
    const config = {
      headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTBjYWY2ZjUyMzhmMzQ4Y2FmODA5NGQ2NWYzMThkYzUxMWJlZmQzNzZjZThmYmEzMzFmNTEwMTc1YzgwM2ViZDRiOTI5NTAxNjdjZmZjODkiLCJpYXQiOjE2MDQ1OTc4MDMsIm5iZiI6MTYwNDU5NzgwMywiZXhwIjoxNjM2MTMzODAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.rEviXxlYxVibXJiIL8KItssjdE5rlHvBWKhbLO4Jr1jOiS1_B21lYnXThG7ASUgGW21lkkqoOvVgxM48CU63xpuoUrfZKx-kqcv_k4Y-64gR5gjRiolPKVbo4CCykcuVCWLC7sw8kFtsmnv2Mu1GBJSgLh3YmbRVedAgQ50fKcbl_rax5Hd5FYBKiv3xH7STa2yyPv25uF_VBxSfWKQEn8BY-dnh2XxyrjQV65DBN3tzhFGliSXHyMhxhEmci4BpgZz8OWDTJ3-dRoRrMLTX3VGgVA39oaGu_xUIqtLCqDLS4iVLQCMRHBHx9u4TZuDeWkOm3go-Ksuxg5uVRjL6iQpdLxQ4s375w-mWxptt0j5GZhS4Scd_cwKKcGs0Pwciuvs0_dtlGH2YOE9aC4FVVcXEzLnpBVkab-qOJ9KzC-0HUvUCmm--GUlwmV4uuH10T8urasgoaGKEywwdoq6BL8_2r9FLXVJbItLpEk3DLQ0eCLO_Az16YZfQIUdzbtPTA43rjw7leHKywyhHhdNHDlrOFcW5_JmnNKMy1C6P0cCeLiCZC128-UC4-lcnTLPas0KVFyoQjDSHspSonv1VUWaJ58P_rYD09ITtQMtZYGoXn2-gAFszlmvmW6Tln2482zC7C_TN9rk6YsvnJiy9NGSvtZqgzJsHzxuDMqbiFVU` }
    }
    Axios.get('http://laravel-api.miquelcastro.com/api/userTodos', config)
      .then(response => {
        this.setState({todos : response.data.todo})
      })
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          
          Axios({
            headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTBjYWY2ZjUyMzhmMzQ4Y2FmODA5NGQ2NWYzMThkYzUxMWJlZmQzNzZjZThmYmEzMzFmNTEwMTc1YzgwM2ViZDRiOTI5NTAxNjdjZmZjODkiLCJpYXQiOjE2MDQ1OTc4MDMsIm5iZiI6MTYwNDU5NzgwMywiZXhwIjoxNjM2MTMzODAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.rEviXxlYxVibXJiIL8KItssjdE5rlHvBWKhbLO4Jr1jOiS1_B21lYnXThG7ASUgGW21lkkqoOvVgxM48CU63xpuoUrfZKx-kqcv_k4Y-64gR5gjRiolPKVbo4CCykcuVCWLC7sw8kFtsmnv2Mu1GBJSgLh3YmbRVedAgQ50fKcbl_rax5Hd5FYBKiv3xH7STa2yyPv25uF_VBxSfWKQEn8BY-dnh2XxyrjQV65DBN3tzhFGliSXHyMhxhEmci4BpgZz8OWDTJ3-dRoRrMLTX3VGgVA39oaGu_xUIqtLCqDLS4iVLQCMRHBHx9u4TZuDeWkOm3go-Ksuxg5uVRjL6iQpdLxQ4s375w-mWxptt0j5GZhS4Scd_cwKKcGs0Pwciuvs0_dtlGH2YOE9aC4FVVcXEzLnpBVkab-qOJ9KzC-0HUvUCmm--GUlwmV4uuH10T8urasgoaGKEywwdoq6BL8_2r9FLXVJbItLpEk3DLQ0eCLO_Az16YZfQIUdzbtPTA43rjw7leHKywyhHhdNHDlrOFcW5_JmnNKMy1C6P0cCeLiCZC128-UC4-lcnTLPas0KVFyoQjDSHspSonv1VUWaJ58P_rYD09ITtQMtZYGoXn2-gAFszlmvmW6Tln2482zC7C_TN9rk6YsvnJiy9NGSvtZqgzJsHzxuDMqbiFVU` },
            method: 'patch',
            url: 'http://laravel-api.miquelcastro.com/api/todo/' + id,
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
            headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTBjYWY2ZjUyMzhmMzQ4Y2FmODA5NGQ2NWYzMThkYzUxMWJlZmQzNzZjZThmYmEzMzFmNTEwMTc1YzgwM2ViZDRiOTI5NTAxNjdjZmZjODkiLCJpYXQiOjE2MDQ1OTc4MDMsIm5iZiI6MTYwNDU5NzgwMywiZXhwIjoxNjM2MTMzODAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.rEviXxlYxVibXJiIL8KItssjdE5rlHvBWKhbLO4Jr1jOiS1_B21lYnXThG7ASUgGW21lkkqoOvVgxM48CU63xpuoUrfZKx-kqcv_k4Y-64gR5gjRiolPKVbo4CCykcuVCWLC7sw8kFtsmnv2Mu1GBJSgLh3YmbRVedAgQ50fKcbl_rax5Hd5FYBKiv3xH7STa2yyPv25uF_VBxSfWKQEn8BY-dnh2XxyrjQV65DBN3tzhFGliSXHyMhxhEmci4BpgZz8OWDTJ3-dRoRrMLTX3VGgVA39oaGu_xUIqtLCqDLS4iVLQCMRHBHx9u4TZuDeWkOm3go-Ksuxg5uVRjL6iQpdLxQ4s375w-mWxptt0j5GZhS4Scd_cwKKcGs0Pwciuvs0_dtlGH2YOE9aC4FVVcXEzLnpBVkab-qOJ9KzC-0HUvUCmm--GUlwmV4uuH10T8urasgoaGKEywwdoq6BL8_2r9FLXVJbItLpEk3DLQ0eCLO_Az16YZfQIUdzbtPTA43rjw7leHKywyhHhdNHDlrOFcW5_JmnNKMy1C6P0cCeLiCZC128-UC4-lcnTLPas0KVFyoQjDSHspSonv1VUWaJ58P_rYD09ITtQMtZYGoXn2-gAFszlmvmW6Tln2482zC7C_TN9rk6YsvnJiy9NGSvtZqgzJsHzxuDMqbiFVU` },
            method: 'patch',
            url: 'http://laravel-api.miquelcastro.com/api/todo/' + id,
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
    const config = {
      headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTBjYWY2ZjUyMzhmMzQ4Y2FmODA5NGQ2NWYzMThkYzUxMWJlZmQzNzZjZThmYmEzMzFmNTEwMTc1YzgwM2ViZDRiOTI5NTAxNjdjZmZjODkiLCJpYXQiOjE2MDQ1OTc4MDMsIm5iZiI6MTYwNDU5NzgwMywiZXhwIjoxNjM2MTMzODAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.rEviXxlYxVibXJiIL8KItssjdE5rlHvBWKhbLO4Jr1jOiS1_B21lYnXThG7ASUgGW21lkkqoOvVgxM48CU63xpuoUrfZKx-kqcv_k4Y-64gR5gjRiolPKVbo4CCykcuVCWLC7sw8kFtsmnv2Mu1GBJSgLh3YmbRVedAgQ50fKcbl_rax5Hd5FYBKiv3xH7STa2yyPv25uF_VBxSfWKQEn8BY-dnh2XxyrjQV65DBN3tzhFGliSXHyMhxhEmci4BpgZz8OWDTJ3-dRoRrMLTX3VGgVA39oaGu_xUIqtLCqDLS4iVLQCMRHBHx9u4TZuDeWkOm3go-Ksuxg5uVRjL6iQpdLxQ4s375w-mWxptt0j5GZhS4Scd_cwKKcGs0Pwciuvs0_dtlGH2YOE9aC4FVVcXEzLnpBVkab-qOJ9KzC-0HUvUCmm--GUlwmV4uuH10T8urasgoaGKEywwdoq6BL8_2r9FLXVJbItLpEk3DLQ0eCLO_Az16YZfQIUdzbtPTA43rjw7leHKywyhHhdNHDlrOFcW5_JmnNKMy1C6P0cCeLiCZC128-UC4-lcnTLPas0KVFyoQjDSHspSonv1VUWaJ58P_rYD09ITtQMtZYGoXn2-gAFszlmvmW6Tln2482zC7C_TN9rk6YsvnJiy9NGSvtZqgzJsHzxuDMqbiFVU` }
    }
    Axios.delete('http://laravel-api.miquelcastro.com/api/todo/' + id, config)

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
    Axios({
      headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTBjYWY2ZjUyMzhmMzQ4Y2FmODA5NGQ2NWYzMThkYzUxMWJlZmQzNzZjZThmYmEzMzFmNTEwMTc1YzgwM2ViZDRiOTI5NTAxNjdjZmZjODkiLCJpYXQiOjE2MDQ1OTc4MDMsIm5iZiI6MTYwNDU5NzgwMywiZXhwIjoxNjM2MTMzODAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.rEviXxlYxVibXJiIL8KItssjdE5rlHvBWKhbLO4Jr1jOiS1_B21lYnXThG7ASUgGW21lkkqoOvVgxM48CU63xpuoUrfZKx-kqcv_k4Y-64gR5gjRiolPKVbo4CCykcuVCWLC7sw8kFtsmnv2Mu1GBJSgLh3YmbRVedAgQ50fKcbl_rax5Hd5FYBKiv3xH7STa2yyPv25uF_VBxSfWKQEn8BY-dnh2XxyrjQV65DBN3tzhFGliSXHyMhxhEmci4BpgZz8OWDTJ3-dRoRrMLTX3VGgVA39oaGu_xUIqtLCqDLS4iVLQCMRHBHx9u4TZuDeWkOm3go-Ksuxg5uVRjL6iQpdLxQ4s375w-mWxptt0j5GZhS4Scd_cwKKcGs0Pwciuvs0_dtlGH2YOE9aC4FVVcXEzLnpBVkab-qOJ9KzC-0HUvUCmm--GUlwmV4uuH10T8urasgoaGKEywwdoq6BL8_2r9FLXVJbItLpEk3DLQ0eCLO_Az16YZfQIUdzbtPTA43rjw7leHKywyhHhdNHDlrOFcW5_JmnNKMy1C6P0cCeLiCZC128-UC4-lcnTLPas0KVFyoQjDSHspSonv1VUWaJ58P_rYD09ITtQMtZYGoXn2-gAFszlmvmW6Tln2482zC7C_TN9rk6YsvnJiy9NGSvtZqgzJsHzxuDMqbiFVU` },
      method: 'post',
      url: 'http://laravel-api.miquelcastro.com/api/todo',
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
