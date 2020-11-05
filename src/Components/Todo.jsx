import React from 'react'

import EditTodoModal from './EditTodo/EditTodoModal'

const Todo = (props) => {

    const getStyle = () => {
        return props.Completed ? {backgroundColor: "#adadad"} : {}
    }

    const limitChars = () => {
        return props.todo.description.length > 85 ? props.todo.description.substring(0, 85) + " ..." : props.todo.description
    }
    const getDate = () => {
        let dateSplit = props.todo.created_at.split("T")[0].split("-");
        let date = dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0]
        let timeSplit = props.todo.created_at.split("T")[1]
        return date + " " + timeSplit.slice(0, 8)
    }

    const priorityColor = () => {
        let color = ""; 
        switch (props.todo.priority) {
            case "Low":
                color = "#7d99ff"   
                break;
            case "Medium":
                color = "#fcaf62"
                break;
            case "High" :
                color = "#eb260c"
                break;
            default :
        }
        return color
    }
   
    return (
        <div >
            <div style={getStyle()} className="todo">
                <div onClick={() => props.MarkComplete(props.todo.id)} className="todoTitle">
                    <div className="priority" style={{backgroundColor: priorityColor()}}></div>
                    <span>{props.todo.title}</span>
                </div>
                
                <span onClick={() => props.MarkComplete(props.todo.id)} className="todoDescription">{limitChars()}</span>
                <div className="todoButtons">
                    <i data-toggle="modal" data-target={"#e" + props.todo.id} className="far fa-edit icon"></i>
                    <i onClick={() => props.DeleteTodo(props.todo.id)} className="fas fa-trash-alt icon"></i>
                    <i data-toggle="collapse" data-target={"#i" + props.todo.id} aria-expanded="false" aria-controls={"i" + props.todo.id} className="fas fa-plus icon"></i>
                </div>
            </div>
            <div className="collapse" id={"i" + props.todo.id}>
                <div className="fullInfo">
                    <ul>
                        <li><strong>Title: </strong>{props.todo.title}</li>
                        <li><strong>Description: </strong>{props.todo.description}</li>
                        <li><strong>Priority: </strong>{props.todo.priority}</li>
                        <li><strong>Created at: </strong>{getDate()}</li>
                    </ul>
                </div>
            </div>
            <EditTodoModal EditTodo={props.EditTodo} todo={props.todo}></EditTodoModal>
        </div>
    )
}

export default Todo  