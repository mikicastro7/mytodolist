import React, { Component } from 'react'

export default class EditTodoModal extends Component {
    state = {
        title: this.props.todo.title,
        description: this.props.todo.description,
        priority: this.props.todo.priority
    }

    fieldHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit = () => {
        this.props.EditTodo(this.props.todo.id, this.state.title, this.state.description, this.state.priority);
        
    }


    render() {
        return (
            <div>
                <div className="modal fade" id={"e" + this.props.todo.id} role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                <div>
                                    <label>Todo Title</label>
                                    <input onChange={this.fieldHandler} name="title" value={this.state.title} type="text" className="form-control" placeholder="Enter Todo Title"></input>
                                    <label>Description</label>
                                    <textarea onChange={this.fieldHandler} name="description" value={this.state.description} type="text" className="form-control" placeholder="Enter the decription of the todo"></textarea>
                                    <label>Priority</label>
                                    <select value={this.state.priority} onChange={this.fieldHandler} name='priority' className='form-control'>
                                        <option value="High">High</option><option value="Medium">Medium</option><option value="Low">Low</option>
                                    </select>
                                    
                                </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button onClick={this.onSubmit} type="submit" className="btn btn-primary" data-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
