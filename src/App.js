import './App.css';
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import { openForm, newForm } from "./actions/index";

function App(props) {
  let { isDisplayForm } = props;

  const onShowForm = () => {
    props.openForm();
    props.newForm();
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
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <TaskForm />
          </div>
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-primary mt-2" onClick={() => onShowForm()}>
                  <i className="fas fa-plus"></i>
                  &nbsp;
                  Add new task
                </button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskControl />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList />
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
    openForm: () => {
      dispatch(openForm());
    },
    newForm: () => {
      dispatch(newForm());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
