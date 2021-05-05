import { connect } from "react-redux";
import { updateStatus } from "./../actions/index";

function TaskItem(props) {
    let { data, order } = props;

    const onUpdateStatus = () => {
        props.updateStatus(props.data.id);
    }

    const onDeleteTask = () => {
        props.handleDeleteTask(props.data.id);
    }

    const onClickUpdate = () => {
        props.handleClickUpdate(props.data.id);
    }

    return (
        <tr>
            <th scope="row" className="align-middle">{order}</th>
            <td className="align-middle">{data.name}</td>
            <td className="align-middle text-center">
                {
                    data.status ?
                        <span className="badge badge-danger" onClick={() => onUpdateStatus()}>Active</span> :
                        <span className="badge badge-success" onClick={() => onUpdateStatus()}>Inactive</span>
                }
            </td>
            <td>
                <button type="button" className="btn btn-primary mx-2 my-1" onClick={() => onClickUpdate()}>
                    <i className="fas fa-edit"></i>
                    &nbsp;
                    Edit
                </button>
                <button type="button" className="btn btn-danger mx-2 my-1" onClick={() => onDeleteTask()}>
                    <i className="fas fa-trash-alt"></i>
                    &nbsp;
                    Delete
                </button>
            </td>
        </tr>
    )
}

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        updateStatus: (id) => {
            dispatch(updateStatus(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);