import React, { Component } from "react";
import TasksTable from "./tasksTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";

import { getTasks } from "../services/tasksList";
import { getSeverity } from "../services/listSeverityFilter";
import { paginate } from "./utils/paginate";

import _ from "lodash";

class Tasks extends Component {
    state = {
        tasks: [],
        severity: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: { path: 'title', order: 'asc' }
      };

      componentDidMount() {
        const severity = [{_id: "", name: 'All' }, ...getSeverity()];

        this.setState({ tasks: getTasks(), severity });
      }

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
      };

      handlePageChange = page => {
        this.setState({ currentPage : page });
      };

      handleSeveritySelect = severity => {                                   
        this.setState({ selectedSeverity: severity, currentPage: 1  });           /// filtering
      };

      handleSort = sortColumn => {
        this.setState({ sortColumn });
      }
      getPagedData = () => {
        const { 
            pageSize, 
            currentPage, 
            sortColumn,
            selectedSeverity, 
            tasks: allTasks 
        } = this.state;

        const filtered = selectedSeverity && selectedSeverity.name !== 'All'      /// filtering
        ? allTasks.filter(t => t.severity.name === selectedSeverity.name) 
        : allTasks;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const tasks = paginate(sorted, currentPage, pageSize);

        return {totalCount: filtered.length, data: tasks}
      }
    

    render() {

        const {length: count} = this.state.tasks;
        const { 
            pageSize, 
            currentPage, 
            sortColumn,
        } = this.state;

        if(this.state.tasks.length === 0) return <p>There are no tasks.</p>;

        const { totalCount, data: tasks } = this.getPagedData();

        return (
        <div className="row">
            <div className="col-2">
                <ListGroup 
                    items={this.state.severity}
                    selectedItem={this.state.selectedSeverity}
                    onItemSelect={this.handleSeveritySelect}
                 />
            </div>
            <div className="col">
                <p>Showing {totalCount} tasks in database.</p>
                <TasksTable 
                    tasks={tasks} 
                    sortColumn={sortColumn}
                    onComplete={this.handleCompleted} 
                    onDelete={this.handleDelete}
                    onSort={this.handleSort}
                />
                <Pagination 
                    itemsCount={totalCount}                                /// filtering 
                    pageSize={pageSize} 
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </div>
        </div>
    )};
};

export default Tasks;