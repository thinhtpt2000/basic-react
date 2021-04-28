import "./TaskForm.css";

function TaskForm(props) {
    return (
        <div className="TaskForm">
            <div className="card">
                <div className="card-header bg-success text-light font-weight-bold">
                    <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">Add new task</div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right">
                            <i className="fas fa-times-circle btn-close" onClick={() => props.hanldeCloseForm()}></i>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label className="font-weight-bold" htmlFor="txtName">Name</label>
                            <input type="text" className="form-control" id="txtName" name="txtName" />
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold" htmlFor="sltStatus">Status</label>
                            <select className="form-control" id="sltStatus" name="sltStatus">
                                <option value={1}>Active</option>
                                <option value={0}>Inactive</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary mx-2 my-1">
                            <i className="fas fa-plus"></i>
                            &nbsp;
                            Save
                        </button>
                        <button type="reset" className="btn btn-danger mx-2 my-1">
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

export default TaskForm;