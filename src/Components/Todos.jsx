import React from 'react'

import Todo from "./Todo"

const Todos = (props) => {
    return (
    <div className="todos"> {
    props.Todos.map((todo) => (
        <Todo EditTodo={props.EditTodo} DeleteTodo={props.DeleteTodo} MarkComplete={props.MarkComplete} Completed={todo.completed} key={todo.id} todo={todo}></Todo>
    ))
    }
    </div> 
    )
}

export default Todos