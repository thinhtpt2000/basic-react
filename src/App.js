import './App.css';
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import Toolbar from "./components/Toolbar";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]); // {id: unique, name, status}

  useEffect(() => {
    if (localStorage && localStorage.getItem('tasks')) {
      let tmpTasks = JSON.parse(localStorage.getItem('tasks'));
      setTasks(tmpTasks);
    }
  }, [])

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
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <TaskForm />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="submit" className="btn btn-primary mt-2">
                  <i className="fas fa-plus"></i>
                  &nbsp;
                  Add new task
                </button>
                <button type="submit" className="btn btn-warning mt-2 ml-2" onClick={() => generateData()}>
                  Generate data
                </button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Toolbar />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList data={tasks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
