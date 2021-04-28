import TaskItem from "./TaskItem";

function TaskList(props) {
    return (
        <div className="TaskList">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col" className="text-center">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>
                            <input type="text" className="form-control" id="txtSearchTb" name="txtSearchTb" />
                        </td>
                        <td>
                            <select className="form-control" id="sltStatus" name="sltStatus">
                                <option value={2}>All</option>
                                <option value={1}>Active</option>
                                <option value={0}>Inactive</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {
                        props.data.map((task, index) => {
                            return <TaskItem 
                                        key={task.id} 
                                        order={index + 1} 
                                        data={task} 
                                        handleUpdateStatus={props.handleUpdateStatus}
                                        handleDeleteTask={props.handleDeleteTask}
                                        handeClickUpdate={props.handeClickUpdate}
                                        />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TaskList;