import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Check from "./common/check";
import Table from './common/table';

class TasksTable extends Component {
    columns = [
        { 
            path: 'title', 
            label: 'Title', 
            content: task => <Link to={`/tasks/${task._id}`}>{task.title}</Link> 
        },
        { path: 'task', label: 'Task' },
        { path: 'category', label: 'Category' },
        { path: 'severity.name', label: 'Severity' },
        { path: 'completed', label: 'Completed' },
        { key: 'complete', 
          content: task => <Check completed={task.completed} onClick={() => this.props.onComplete(task)}/> },
        { key: 'delete', 
          content: task => (<button 
                    onClick={() => this.props.onDelete(task)} 
                    className="btn btn-danger btn-sm">Remove
                    </button> )
                }
    ]

render() { 
    const { tasks, onSort, sortColumn } = this.props;

    return (
        <Table columns={this.columns} data={tasks} onSort={onSort} sortColumn={sortColumn} />
        
    );
    }
}

export default TasksTable;
