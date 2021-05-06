import TaskSearch from "./TaskSearch";
import TaskSort from "./TaskSort";

function TaskControl(props) {
    return (
        <div className="Toolbar">
            <div className="row mt-2">
                <TaskSearch />
                <TaskSort />
            </div>
        </div>
    );
}

export default TaskControl;
