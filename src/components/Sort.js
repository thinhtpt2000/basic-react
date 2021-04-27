/* eslint-disable jsx-a11y/anchor-is-valid */

function Sort() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="btn-group">
                <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort
                    </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Name A-Z</a>
                    <a className="dropdown-item" href="#">Name Z-A</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Status Active</a>
                    <a className="dropdown-item" href="#">Status Inactive</a>
                </div>
            </div>
        </div>
    )
}

export default Sort;