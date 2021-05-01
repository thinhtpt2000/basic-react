import './App.css';
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import Toolbar from "./components/Toolbar";
import TaskList from "./components/TaskList";
import { findIndex, filter} from "lodash";

function App() {
  const [tasks, setTasks] = useState([]); // {id: unique, name, status}
  const [isDisplayForm, setIsDisplayForm] = useState(false);
  const [updatingTask, setUpdatingTask] = useState(null);
  const [filters, setFilters] = useState({
    name: "",
    status: 2
  });
  const [filterTasks, setFilterTasks] = useState([]);

  useEffect(() => {
    if (localStorage && localStorage.getItem('tasks')) {
      let tmpTasks = JSON.parse(localStorage.getItem('tasks'));
      setTasks(tmpTasks);
      setFilterTasks(tmpTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks) {
      onFilter();
    }
  }, [tasks]); // eslint-disable-line react-hooks/exhaustive-deps

  const generateData = () => {
    let demoTasks = [
      {
        id: generateId(),
        name: 'Learn ReactJS',
        status: true
      },
      {
        id: generateId(),
        name: 'Working from home',
        status: false
      },
      {
        id: generateId(),
        name: 'Coffee time',
        status: true
      },
    ];
    setTasks(demoTasks);
    localStorage.setItem('tasks', JSON.stringify(demoTasks));
  }

  const randomId = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

  const generateId = () => randomId() + '-' + randomId() + '-' + randomId() + '-' + randomId();

  const onToggleForm = () => {
    setIsDisplayForm(true);
    setUpdatingTask(null);
  }

  const onCloseForm = () => {
    setIsDisplayForm(false);
    setUpdatingTask(null);
  }

  const onSubmitData = (data) => {
    let tmpTasks = [];
    if (data.id === "") {
      tmpTasks = tasks;
      tmpTasks.push({
        id: generateId(),
        name: data.txtName,
        status: data.sltStatus
      });
    } else {
      tmpTasks = tasks.map((task) => {
        if (task.id === data.id) {
          task.name = data.txtName;
          task.status = data.sltStatus;
        }
        return task;
      });
    }
    setTasks([...tmpTasks]);
    localStorage.setItem('tasks', JSON.stringify(tmpTasks));
  }

  const onUpdateStatus = (id) => {
    let newTasks = tasks;
    let index = findIndex(newTasks, (task) => task.id === id);
    if (index !== -1) {
      newTasks[index].status = !newTasks[index].status;
    }
    setTasks([...newTasks]);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  const onDeleteTask = (id) => {
    let newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    onCloseForm();
  }

  const onUpdateTask = (id) => {
    let tmpTask = tasks.filter((task) => {
      return task.id === id;
    })[0];
    setUpdatingTask(tmpTask);
    onShowForm();
  }

  const onShowForm = () => {
    setIsDisplayForm(true);
  }

  const onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus || filters.status);
    filterName = (filterName === undefined ? filters.name : filterName).toLowerCase();
    let newTasks = tasks;
    if (filterName !== "") {
      newTasks = filter(newTasks, (task) => task.name.toLowerCase().indexOf(filterName) !== -1);
    }
    newTasks = filter(newTasks, (task) =>
      filterStatus === 2
      || (filterStatus === 1 && task.status)
      || (filterStatus === 0 && !task.status)
    );
    setFilterTasks([...newTasks]);
    setFilters({
      name: filterName,
      status: filterStatus
    });
  }

  const onSearch = (value) => {
    if (value !== "") {
      let newTasks = tasks.filter((task) => task.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
      setFilterTasks(newTasks);
    } else {
      setFilterTasks(tasks);
    }
  }

  const onSort = (sortBy, sortValue) => {
    let newTasks = filterTasks;
    if (sortBy === 'name') {
      newTasks.sort((a, b) => {
        if (a.name > b.name) {
          return sortValue;
        } else if (a.name < b.name) {
          return -sortValue;
        } else {
          return 0;
        }
      });
    } else {
      newTasks.sort((a, b) => {
        if (a.status > b.status) {
          return -sortValue;
        } else if (a.status < b.status) {
          return sortValue;
        } else {
          return 0;
        }
      });
    }
    setFilterTasks([...newTasks]);
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
                handleCloseForm={onCloseForm}
                handleSubmitForm={onSubmitData}
                data={updatingTask}
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
                <button type="button" className="btn btn-warning mt-2 ml-2" onClick={() => generateData()}>
                  Generate data
                </button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Toolbar
                  handleSearch={onSearch}
                  handleSort={onSort}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  data={filterTasks}
                  handleUpdateStatus={onUpdateStatus}
                  handleDeleteTask={onDeleteTask}
                  handeClickUpdate={onUpdateTask}
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

export default App;
