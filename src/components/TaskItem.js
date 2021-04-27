function TaskItem() {
    return (
        <tr>
            <th scope="row" className="align-middle">1</th>
            <td className="align-middle">Learn Angular</td>
            <td className="align-middle text-center">
                <span className="badge badge-primary">Inactive</span>
            </td>
            <td>
                <button type="button" className="btn btn-warning mr-2">
                    <i className="fas fa-edit"></i>
                        &nbsp;
                        Edit
                    </button>
                <button type="button" className="btn btn-danger ml-2">
                    <i className="fas fa-trash-alt"></i>
                        &nbsp;
                        Delete
                    </button>
            </td>
        </tr>
    )
}

export default TaskItem;