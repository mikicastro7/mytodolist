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
      headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjA4ZGM0NzQ0MzgyZjY5YzNlZDg4NzAxZWYxZWE0YTI1MjE5MjVlMTVmNmY4OWZkYTU1YmRmN2I5MjkwNzE0Y2MxNjg0ODU1ZGNkM2Y2MmMiLCJpYXQiOjE2MDQyNDMwNjIsIm5iZiI6MTYwNDI0MzA2MiwiZXhwIjoxNjM1Nzc5MDYyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.MEE9ijh0dooX9HnUY51FNpODnMTeeHu-Rfk68ZKaz3i1ZUGVGUXWy6SA9ZDBm5SwXAZKgQi5jCaski5ZKN9-ATofXPkuQMB-Ro8PJI2fBww4lr3GMR8KkRLiJRTLD8JiGPMg-Xw3dUxbpOSYq-UhODyD44XWAoZGRYEdHttS-JdnRd9N0EJfgcufouAfzeSwyjh3fqGDaSHs7d-RXc0PpPaLzvJ3JYBPBBXcLAWatf-CTH4CIFSzwjfRQwwJ0uQjDh4DWVGdfM2D_o7GorEry919tuVEV6B5J4GZb64hAjED0oQ1LPyY60-aDXFmkeY_PzJQIEa_6WpGtYj3yRDmyH8MKbBr2eX9rIMPE_DlAClaiW6N4GB6IsSfH5quCOeWBfaowuj48F2RRuj_PFtm9XjWCGy6eV-3ALeQ2B-qtwvjyFqeXb299zmD8KMhCbqQgSqqht7e6asP1nEJPH-MMyH3NJpFzA4ZkXcB506o8_If8kxVciPZjVyKJ3WROatgiNqKlbQ3J_BSw6EAgG88xbM22nzDb8qnElirxQxLx2gZJXkwSuMOyiqyz_jaj6O-ObBO2y1nPRt-_piu2apwfi4Npe27GIhRsDtUJCqZIBFaHPRrZ-kLO7yHNjxpq-2ZN8iMduq9HXFUJ307krhfxB0fT4tZsbCu1zjaNPYTQt4` }
    }
    Axios.get('http://api.com/api/userTodos', config)
      .then(response => {
        console.log(response);
        this.setState({todos : response.data.todo})
      })
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          
          Axios({
            headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjA4ZGM0NzQ0MzgyZjY5YzNlZDg4NzAxZWYxZWE0YTI1MjE5MjVlMTVmNmY4OWZkYTU1YmRmN2I5MjkwNzE0Y2MxNjg0ODU1ZGNkM2Y2MmMiLCJpYXQiOjE2MDQyNDMwNjIsIm5iZiI6MTYwNDI0MzA2MiwiZXhwIjoxNjM1Nzc5MDYyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.MEE9ijh0dooX9HnUY51FNpODnMTeeHu-Rfk68ZKaz3i1ZUGVGUXWy6SA9ZDBm5SwXAZKgQi5jCaski5ZKN9-ATofXPkuQMB-Ro8PJI2fBww4lr3GMR8KkRLiJRTLD8JiGPMg-Xw3dUxbpOSYq-UhODyD44XWAoZGRYEdHttS-JdnRd9N0EJfgcufouAfzeSwyjh3fqGDaSHs7d-RXc0PpPaLzvJ3JYBPBBXcLAWatf-CTH4CIFSzwjfRQwwJ0uQjDh4DWVGdfM2D_o7GorEry919tuVEV6B5J4GZb64hAjED0oQ1LPyY60-aDXFmkeY_PzJQIEa_6WpGtYj3yRDmyH8MKbBr2eX9rIMPE_DlAClaiW6N4GB6IsSfH5quCOeWBfaowuj48F2RRuj_PFtm9XjWCGy6eV-3ALeQ2B-qtwvjyFqeXb299zmD8KMhCbqQgSqqht7e6asP1nEJPH-MMyH3NJpFzA4ZkXcB506o8_If8kxVciPZjVyKJ3WROatgiNqKlbQ3J_BSw6EAgG88xbM22nzDb8qnElirxQxLx2gZJXkwSuMOyiqyz_jaj6O-ObBO2y1nPRt-_piu2apwfi4Npe27GIhRsDtUJCqZIBFaHPRrZ-kLO7yHNjxpq-2ZN8iMduq9HXFUJ307krhfxB0fT4tZsbCu1zjaNPYTQt4` },
            method: 'patch',
            url: 'http://api.com/api/todo/' + id,
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
            headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjA4ZGM0NzQ0MzgyZjY5YzNlZDg4NzAxZWYxZWE0YTI1MjE5MjVlMTVmNmY4OWZkYTU1YmRmN2I5MjkwNzE0Y2MxNjg0ODU1ZGNkM2Y2MmMiLCJpYXQiOjE2MDQyNDMwNjIsIm5iZiI6MTYwNDI0MzA2MiwiZXhwIjoxNjM1Nzc5MDYyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.MEE9ijh0dooX9HnUY51FNpODnMTeeHu-Rfk68ZKaz3i1ZUGVGUXWy6SA9ZDBm5SwXAZKgQi5jCaski5ZKN9-ATofXPkuQMB-Ro8PJI2fBww4lr3GMR8KkRLiJRTLD8JiGPMg-Xw3dUxbpOSYq-UhODyD44XWAoZGRYEdHttS-JdnRd9N0EJfgcufouAfzeSwyjh3fqGDaSHs7d-RXc0PpPaLzvJ3JYBPBBXcLAWatf-CTH4CIFSzwjfRQwwJ0uQjDh4DWVGdfM2D_o7GorEry919tuVEV6B5J4GZb64hAjED0oQ1LPyY60-aDXFmkeY_PzJQIEa_6WpGtYj3yRDmyH8MKbBr2eX9rIMPE_DlAClaiW6N4GB6IsSfH5quCOeWBfaowuj48F2RRuj_PFtm9XjWCGy6eV-3ALeQ2B-qtwvjyFqeXb299zmD8KMhCbqQgSqqht7e6asP1nEJPH-MMyH3NJpFzA4ZkXcB506o8_If8kxVciPZjVyKJ3WROatgiNqKlbQ3J_BSw6EAgG88xbM22nzDb8qnElirxQxLx2gZJXkwSuMOyiqyz_jaj6O-ObBO2y1nPRt-_piu2apwfi4Npe27GIhRsDtUJCqZIBFaHPRrZ-kLO7yHNjxpq-2ZN8iMduq9HXFUJ307krhfxB0fT4tZsbCu1zjaNPYTQt4` },
            method: 'patch',
            url: 'http://api.com/api/todo/' + id,
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
      headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjA4ZGM0NzQ0MzgyZjY5YzNlZDg4NzAxZWYxZWE0YTI1MjE5MjVlMTVmNmY4OWZkYTU1YmRmN2I5MjkwNzE0Y2MxNjg0ODU1ZGNkM2Y2MmMiLCJpYXQiOjE2MDQyNDMwNjIsIm5iZiI6MTYwNDI0MzA2MiwiZXhwIjoxNjM1Nzc5MDYyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.MEE9ijh0dooX9HnUY51FNpODnMTeeHu-Rfk68ZKaz3i1ZUGVGUXWy6SA9ZDBm5SwXAZKgQi5jCaski5ZKN9-ATofXPkuQMB-Ro8PJI2fBww4lr3GMR8KkRLiJRTLD8JiGPMg-Xw3dUxbpOSYq-UhODyD44XWAoZGRYEdHttS-JdnRd9N0EJfgcufouAfzeSwyjh3fqGDaSHs7d-RXc0PpPaLzvJ3JYBPBBXcLAWatf-CTH4CIFSzwjfRQwwJ0uQjDh4DWVGdfM2D_o7GorEry919tuVEV6B5J4GZb64hAjED0oQ1LPyY60-aDXFmkeY_PzJQIEa_6WpGtYj3yRDmyH8MKbBr2eX9rIMPE_DlAClaiW6N4GB6IsSfH5quCOeWBfaowuj48F2RRuj_PFtm9XjWCGy6eV-3ALeQ2B-qtwvjyFqeXb299zmD8KMhCbqQgSqqht7e6asP1nEJPH-MMyH3NJpFzA4ZkXcB506o8_If8kxVciPZjVyKJ3WROatgiNqKlbQ3J_BSw6EAgG88xbM22nzDb8qnElirxQxLx2gZJXkwSuMOyiqyz_jaj6O-ObBO2y1nPRt-_piu2apwfi4Npe27GIhRsDtUJCqZIBFaHPRrZ-kLO7yHNjxpq-2ZN8iMduq9HXFUJ307krhfxB0fT4tZsbCu1zjaNPYTQt4` }
    }
    Axios.delete('http://api.com/api/todo/' + id, config)

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
      headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjA4ZGM0NzQ0MzgyZjY5YzNlZDg4NzAxZWYxZWE0YTI1MjE5MjVlMTVmNmY4OWZkYTU1YmRmN2I5MjkwNzE0Y2MxNjg0ODU1ZGNkM2Y2MmMiLCJpYXQiOjE2MDQyNDMwNjIsIm5iZiI6MTYwNDI0MzA2MiwiZXhwIjoxNjM1Nzc5MDYyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.MEE9ijh0dooX9HnUY51FNpODnMTeeHu-Rfk68ZKaz3i1ZUGVGUXWy6SA9ZDBm5SwXAZKgQi5jCaski5ZKN9-ATofXPkuQMB-Ro8PJI2fBww4lr3GMR8KkRLiJRTLD8JiGPMg-Xw3dUxbpOSYq-UhODyD44XWAoZGRYEdHttS-JdnRd9N0EJfgcufouAfzeSwyjh3fqGDaSHs7d-RXc0PpPaLzvJ3JYBPBBXcLAWatf-CTH4CIFSzwjfRQwwJ0uQjDh4DWVGdfM2D_o7GorEry919tuVEV6B5J4GZb64hAjED0oQ1LPyY60-aDXFmkeY_PzJQIEa_6WpGtYj3yRDmyH8MKbBr2eX9rIMPE_DlAClaiW6N4GB6IsSfH5quCOeWBfaowuj48F2RRuj_PFtm9XjWCGy6eV-3ALeQ2B-qtwvjyFqeXb299zmD8KMhCbqQgSqqht7e6asP1nEJPH-MMyH3NJpFzA4ZkXcB506o8_If8kxVciPZjVyKJ3WROatgiNqKlbQ3J_BSw6EAgG88xbM22nzDb8qnElirxQxLx2gZJXkwSuMOyiqyz_jaj6O-ObBO2y1nPRt-_piu2apwfi4Npe27GIhRsDtUJCqZIBFaHPRrZ-kLO7yHNjxpq-2ZN8iMduq9HXFUJ307krhfxB0fT4tZsbCu1zjaNPYTQt4` },
      method: 'post',
      url: 'http://api.com/api/todo',
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
        completed: false
        
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
