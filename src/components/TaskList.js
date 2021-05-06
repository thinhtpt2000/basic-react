import TaskItem from "./TaskItem";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { filterTask } from "./../actions/index";

function TaskList(props) {
    const [filters, setFilters] = useState({
        filterName: "",
        filterStatus: 2
    });
    const [displayData, setDisplayData] = useState([]);

    let { filterValues, searchValue, sortValues } = props;

    useEffect(() => {
        let { data } = props;
        if (filterValues.name !== "") {
            data = data.filter((task) => task.name.toLowerCase().indexOf(filterValues.name) !== -1);
        }
        data = data.filter((task) =>
            filterValues.status === 2
            || (filterValues.status === 1 && task.status)
            || (filterValues.status === 0 && !task.status)
        );

        if (searchValue !== "") {
            data = data.filter((task) => task.name.toLowerCase().indexOf(searchValue) !== -1);
        }

        if (sortValues.by === 'name') {
            data.sort((a, b) => {
                if (a.name > b.name) {
                    return sortValues.value;
                } else if (a.name < b.name) {
                    return -sortValues.value;
                } else {
                    return 0;
                }
            });
        } else {
            data.sort((a, b) => {
                if (a.status > b.status) {
                    return -sortValues.value;
                } else if (a.status < b.status) {
                    return sortValues.value;
                } else {
                    return 0;
                }
            });
        }
        setDisplayData([...data]);
    }, [filterValues, searchValue, sortValues, props]);

    const onFilterChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let tmpFilter = {
            ...filters,
            [name]: value
        }
        setFilters(tmpFilter);
        props.filterTask(tmpFilter);
    }

    return (
        <div className="TaskList">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" style={{width: "2.5rem"}}>#</th>
                        <th scope="col">Name</th>
                        <th scope="col" className="text-center" style={{width: "7rem"}}>Status</th>
                        <th scope="col" style={{width: "7rem"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                id="filterName"
                                name="filterName"
                                value={filters.filterName}
                                onChange={onFilterChange}
                            />
                        </td>
                        <td>
                            <select
                                className="form-control"
                                id="filterStatus"
                                name="filterStatus"
                                value={filters.filterStatus}
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
                        displayData.map((task, index) => {
                            return <TaskItem
                                key={task.id}
                                order={index + 1}
                                data={task}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.tasks,
        filterValues: state.filterTask,
        searchValue: state.searchTask,
        sortValues: state.sortTask
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        filterTask: (filter) => {
            dispatch(filterTask(filter));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);