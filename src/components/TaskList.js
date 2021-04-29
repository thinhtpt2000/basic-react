import TaskItem from "./TaskItem";
import { useState } from "react";

function TaskList(props) {
    const [filters, setFilters] = useState({
        txtSearchTb: "",
        sltStatus: 2
    });

    const onFilterChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let tmpFilter = {
            ...filters,
            [name]: value
        }
        setFilters(tmpFilter);
        props.handleFilter(tmpFilter.txtSearchTb, tmpFilter.sltStatus);
    }

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
                            <input 
                                type="text" 
                                className="form-control" 
                                id="txtSearchTb" 
                                name="txtSearchTb" 
                                value={filters.txtSearchTb}
                                onChange={onFilterChange}
                                />
                        </td>
                        <td>
                            <select 
                                className="form-control" 
                                id="sltStatus" 
                                name="sltStatus"
                                value={filters.sltStatus}
                                onChange={onFilterChange}
                                >
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