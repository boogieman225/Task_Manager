import React, { Component } from 'react';
import Tasks from './components/tasks';
import { getTasks } from "./services/tasksList";
import './App.css';

class App extends Component {

  render() { 
    return (
      <React.Fragment>
        <main className='container'>
          <Tasks 
            /*tasks={this.state.tasks}
            onDelete={this.handleDelete}
            onCompleted={this.handleCompleted}
            onPageChange={this.handlePageChange}*/
          />
        </main>
      </React.Fragment>
    );
  }
}


export default App;
