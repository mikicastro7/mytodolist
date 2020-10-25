import React from 'react'

const Todo = (props) => {

    const getStyle = () => {
        return props.Completed ? {backgroundColor: "#adadad"} : {}
    }
   
    return (
        <div >
            <div style={getStyle()} className="todo">
                <span onClick={() => props.MarkComplete(props.todo.id)}  className="todoTitle">{props.todo.title}</span>
                <span onClick={() => props.MarkComplete(props.todo.id)} className="todoDescription">{props.todo.description}</span>
                <div className="todoButtons">
                    <i className="far fa-edit icon"></i>
                    <i className="fas fa-trash-alt icon"></i>
                    <i className="fas fa-plus icon"></i>
                </div>
            </div>
        </div>
    )
}

export default Todo  