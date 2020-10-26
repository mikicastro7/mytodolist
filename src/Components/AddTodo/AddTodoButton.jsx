import React, { Component } from 'react'

import AddTodoModal from "./AddTodoModal"

export default class AddTodoButton extends Component {
    render() {
        return (
            <div>
                <div className="todoButton-div">
                    <button className="todoButton" data-toggle="modal" data-target="#exampleModal" ><i className="fas fa-plus"></i> Add Todo</button>
                    <AddTodoModal AddTodo={this.props.AddTodo}></AddTodoModal>
                </div>
            </div>
        )
    }
}
