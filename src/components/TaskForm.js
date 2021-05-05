import "./TaskForm.css";
import { connect } from "react-redux";
import { addTask, closeForm, updateTask, updateForm, clearForm } from "./../actions/index";

function TaskForm(props) {
    const { isDisplayForm, selectedTask } = props;

    const onChangeData = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let payload = {
            ...selectedTask,
            [name]: value
        }
        props.updateForm(payload);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        if (selectedTask.id !== "") {
            props.updateTask(selectedTask);
        } else {
            props.addTask(selectedTask);
        }
        onClearForm();
        onCloseForm();
    }

    const onClearForm = () => {
        props.clearForm();
    }

    const onCloseForm = () => {
        props.closeForm();
    }

    return (
        <>
            {
                isDisplayForm ?
                    (<div className="TaskForm" >
                        <div className="card">
                            <div className="card-header bg-dark text-light font-weight-bold">
                                <div className="row">
                                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">{selectedTask.id !== "" ? "Update" : "Add"} new task</div>
                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right">
                                        <i className="fas fa-times-circle btn-close" onClick={() => onCloseForm()}></i>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={onSubmitForm}>
                                    <div className="form-group">
                                        <label className="font-weight-bold" htmlFor="txtName">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="txtName"
                                            name="txtName"
                                            value={selectedTask.txtName}
                                            onChange={onChangeData}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="font-weight-bold" htmlFor="sltStatus">Status</label>
                                        <select
                                            className="form-control"
                                            id="sltStatus"
                                            name="sltStatus"
                                            value={selectedTask.sltStatus}
                                            onChange={onChangeData}
                                        >
                                            <option value="1">Active</option>
                                            <option value="0">Inactive</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary mx-2 my-1">
                                        <i className="fas fa-plus"></i>
                            &nbsp;
                            Save
                        </button>
                                    <button type="reset" className="btn btn-danger mx-2 my-1" onClick={() => onClearForm()}>
                                        <i className="fas fa-times"></i>
                            &nbsp;
                            Reset
                        </button>
                                </form>
                            </div>
                        </div>
                    </div>)
                    : ''
            }
        </>);
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        selectedTask: state.selectedTask
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addTask: (task) => {
            dispatch(addTask(task));
        },
        closeForm: () => {
            dispatch(closeForm());
        },
        updateForm: (task) => {
            dispatch(updateForm(task));
        },
        clearForm: () => {
            dispatch(clearForm());
        },
        updateTask: (task) => {
            dispatch(updateTask(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);