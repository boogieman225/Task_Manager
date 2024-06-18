import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'; 
import Tasks from './components/tasks';

import TasksForm from './components/taskForm';
import HireUs from './components/hireUs';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import LoginForm from './components/loginForm';
import './App.css';

class App extends Component {
  render() { 
    return (
      <React.Fragment>

      <NavBar />
      <main className='container'>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/tasks/:id" component={TasksForm} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/hireus" component={HireUs} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/tasks" />
          <Redirect  to="/not-found" /> 
        </Switch>
      </main>

      </React.Fragment>
    );
  }
}

export default App;
