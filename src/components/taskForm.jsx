import React, { Component } from 'react';

const TasksForm = ({ match, history }) => { 
    return ( 
    <div>
        <h1>TasksForm ... {match.params.id} </h1>
        <button 
         className='btn btn-primary' 
         onClick={() => history.push('/tasks')}
        >
            Save
        </button>
    </div>
);
};
 
export default TasksForm;