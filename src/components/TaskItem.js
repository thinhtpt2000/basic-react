function TaskItem(props) {
    let {data, order} = props;
    return (
        <tr>
            <th scope="row" className="align-middle">{order}</th>
            <td className="align-middle">{data.name}</td>
            <td className="align-middle text-center">
                {
                    data.status ?  
                        <span className="badge badge-danger">Active</span> : 
                        <span className="badge badge-primary">Inactive</span>
                }
            </td>
            <td>
                <button type="button" className="btn btn-warning mx-2 my-1">
                    <i className="fas fa-edit"></i>
                    &nbsp;
                    Edit
                </button>
                <button type="button" className="btn btn-danger mx-2 my-1">
                    <i className="fas fa-trash-alt"></i>
                    &nbsp;
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default TaskItem;