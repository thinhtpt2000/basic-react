/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./TaskSort.css";
import { connect } from "react-redux";
import { sortTask } from "./../actions/index";

function TaskSort(props) {
    const [sort, setSort] = useState(props.sortValues);

    const onClick = (event, sortBy, sortValue) => {
        event.preventDefault();
        let tmpSort = {
            by: sortBy,
            value: sortValue
        }
        setSort({...tmpSort});
        props.sortTask(tmpSort);
    }

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="btn-group">
                <button type="button" className="btn btn-light text-primary border dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort
                    </button>
                <div className="dropdown-menu">
                    <a className={sort.by === "name" && sort.value === 1 ? "dropdown-item sort_selected" : "dropdown-item"}
                        href="#"
                        onClick={(e) => onClick(e, "name", 1)}>Name A-Z</a>
                    <a className={sort.by === "name" && sort.value === -1 ? "dropdown-item sort_selected" : "dropdown-item"}
                        href="#"
                        onClick={(e) => onClick(e, "name", -1)}>Name Z-A</a>
                    <div className="dropdown-divider"></div>
                    <a className={sort.by === "status" && sort.value === 1 ? "dropdown-item sort_selected" : "dropdown-item"}
                        href="#"
                        onClick={(e) => onClick(e, "status", 1)}>Status Active</a>
                    <a className={sort.by === "status" && sort.value === -1 ? "dropdown-item sort_selected" : "dropdown-item"}
                        href="#"
                        onClick={(e) => onClick(e, "status", -1)}>Status Inactive</a>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        sortValues: state.sortTask
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        sortTask: (sort) => {
            dispatch(sortTask(sort));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskSort);