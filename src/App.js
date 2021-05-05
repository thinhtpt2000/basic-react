import './App.css';
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import { findIndex, filter } from "lodash";
import { connect } from "react-redux";
import { toggleForm, openForm } from "./actions/index";

function App(props) {
  const [state, setState] = useState({
    updatingTask: {},
    filters: {
      name: "",
      status: 2
    },
    filterTasks: []
  });

  let { isDisplayForm } = props;

  const onToggleForm = () => {
    props.onToggleForm();
  }

  const onSubmitData = (data) => {
    // let newTasks = [];
    // if (data.id === "") {
    // newTasks = state.tasks;
    //   newTasks.push({
    //     id: generateId(),
    //     name: data.txtName,
    //     status: data.sltStatus
    //   });
    // } else {
    // newTasks = state.tasks.map((task) => {
    //   if (task.id === data.id) {
    //     task.name = data.txtName;
    //     task.status = data.sltStatus;
    //   }
    //   return task;
    // });
    // }
    // setState(prevState => ({
    //   ...prevState,
    // tasks: [...newTasks]
    // }));
    // localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  const onUpdateStatus = (id) => {
    // let newTasks = state.tasks;
    // let index = findIndex(newTasks, (task) => task.id === id);
    // if (index !== -1) {
    //   newTasks[index].status = !newTasks[index].status;
    // }
    // setState(prevState => ({
    //   ...prevState,
    // tasks: [...newTasks]
    // }));
    // localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  const onDeleteTask = (id) => {
    // let newTasks = state.tasks.filter((task) => {
    //   return task.id !== id;
    // });
    // setState(prevState => ({
    //   ...prevState,
    //   tasks: [...newTasks]
    // }));
    // localStorage.setItem('tasks', JSON.stringify(newTasks));
    // onCloseForm();
  }

  const onUpdateTask = (id) => {
    // let tmpTask = state.tasks.filter((task) => {
    //   return task.id === id;
    // })[0];
    // setState(prevState => ({
    //   ...prevState,
    //   updatingTask: tmpTask
    // }));
    onShowForm();
  }

  const onShowForm = () => {
    props.onShowForm();
  }

  const onFilter = (filterName, filterStatus) => {
    // filterStatus = parseInt(filterStatus || state.filters.status);
    // filterName = (filterName === undefined ? state.filters.name : filterName).toLowerCase();
    // let newTasks = state.tasks;
    // if (filterName !== "") {
    //   newTasks = filter(newTasks, (task) => task.name.toLowerCase().indexOf(filterName) !== -1);
    // }
    // newTasks = filter(newTasks, (task) =>
    //   filterStatus === 2
    //   || (filterStatus === 1 && task.status)
    //   || (filterStatus === 0 && !task.status)
    // );
    // setState(prevState => ({
    //   ...prevState,
    //   filterTasks: [...newTasks],
    //   filters: {
    //     name: filterName,
    //     status: filterStatus
    //   }
    // }));
  }

  const onSearch = (value) => {
    //   let newTasks = state.tasks;
    //   if (value !== "") {
    //     newTasks = newTasks.filter((task) => task.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    //   }
    //   setState(prevState => ({
    //     ...prevState,
    //     ...state,
    //     filterTasks: [...newTasks]
    //   }));
  }

  const onSort = (sortBy, sortValue) => {
    //   let newTasks = state.filterTasks;
    //   if (sortBy === 'name') {
    //     newTasks.sort((a, b) => {
    //       if (a.name > b.name) {
    //         return sortValue;
    //       } else if (a.name < b.name) {
    //         return -sortValue;
    //       } else {
    //         return 0;
    //       }
    //     });
    //   } else {
    //     newTasks.sort((a, b) => {
    //       if (a.status > b.status) {
    //         return -sortValue;
    //       } else if (a.status < b.status) {
    //         return sortValue;
    //       } else {
    //         return 0;
    //       }
    //     });
    //   }
    //   setState(prevState => ({
    //     ...prevState,
    //     filterTasks: [...newTasks]
    //   }));
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
            <h1 className="text-center">Task Management</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          {
            isDisplayForm &&
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <TaskForm
                data={state.updatingTask}
              />
            </div>
          }
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-primary mt-2" onClick={() => onToggleForm()}>
                  <i className="fas fa-plus"></i>
                  &nbsp;
                  Add new task
                </button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskControl
                  handleSearch={onSearch}
                  handleSort={onSort}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  handleUpdateStatus={onUpdateStatus}
                  handleDeleteTask={onDeleteTask}
                  handleClickUpdate={onUpdateTask}
                  handleFilter={onFilter}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(toggleForm());
    },
    onShowForm: () => {
      dispatch(openForm());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
