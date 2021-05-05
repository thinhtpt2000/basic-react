import "./TaskForm.css";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTask } from "./../actions/index";

function TaskForm(props) {
    const [data, setData] = useState({
        id: "",
        txtName: "",
        sltStatus: "1"
    });

    useEffect(() => {
        let updatingData = props.data;
        updatingData = updatingData ? updatingData : {
            id: "",
            name: "",
            status: true
        };
        setData({
            id: updatingData.id,
            txtName: updatingData.name,
            sltStatus: updatingData.status ? "1" : "0"
        });
    }, [props.data]);

    const onChangeData = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        setData({
            ...data,
            [name]: value
        });
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        props.onAddTask(data);
        onClearForm();
        props.handleCloseForm();
    }

    const onClearForm = () => {
        setData({
            id: "",
            txtName: "",
            sltStatus: "1"
        });
    }

    return (
        <div className="TaskForm">
            <div className="card">
                <div className="card-header bg-dark text-light font-weight-bold">
                    <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">{data.id !== "" ? "Update" : "Add"} new task</div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right">
                            <i className="fas fa-times-circle btn-close" onClick={() => props.handleCloseForm()}></i>
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
                                value={data.txtName}
                                onChange={onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold" htmlFor="sltStatus">Status</label>
                            <select
                                className="form-control"
                                id="sltStatus"
                                name="sltStatus"
                                value={data.sltStatus}
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
        </div>
    );
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(addTask(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);