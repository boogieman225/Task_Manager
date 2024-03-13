import React, { Component } from "react";
import { getTasks } from "../services/tasksList";
import Check from "./common/check";

class Tasks extends Component {
    state = {
        tasks: getTasks()
    };
    handleDelete = task => {
        const tasks = this.state.tasks.filter(t => t._id !== task._id);
        this.setState({ tasks });
    };
    handleCompleted = task => {
        const tasks = [...this.state.tasks];
        const index = tasks.indexOf(task);
        tasks[index] = {...tasks[index]};
        tasks[index].completed = !tasks[index].completed;
        this.setState({ tasks });
    }

    render() {
        const {length: count} = this.state.tasks;

        if(this.state.tasks.length === 0) 
            return <p>There are no tasks.</p>;

        return (
        <React.Fragment>
            <p>Showing {count} tasks in database.</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Task</th>
                        <th>Category</th>
                        <th>Severity</th>
                        <th>Completed</th>
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {this.state.tasks.map(task => (
                    <tr key={task._id}>
                        <td>{task.title}</td>
                        <td>{task.task}</td>
                        <td>{task.category}</td>
                        <td>{task.severity.name}</td>
                        <td><Check completed={task.completed} onClick={() => this.handleCompleted(task)}/></td>
                        <td><button onClick={ () => this.handleDelete(task) } className="btn btn-danger btn-sm">Remove</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )};
};

export default Tasks;