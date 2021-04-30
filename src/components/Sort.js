/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./Sort.css";

function Sort(props) {
    const [sort, setSort] = useState({
        name: "",
        value: 0
    });

    const onClick = (event, sortBy, sortValue) => {
        event.preventDefault();
        setSort({
            name: sortBy,
            value: sortValue
        });
        props.handleSort(sortBy, sortValue);
    }

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="btn-group">
                <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort
                    </button>
                <div className="dropdown-menu">
                    <a className={sort.name === "name" && sort.value === 1 ? "dropdown-item sort_selected" : "dropdown-item"}
                        href="#"
                        onClick={(e) => onClick(e, "name", 1)}>Name A-Z</a>
                    <a className={sort.name === "name" && sort.value === -1 ? "dropdown-item sort_selected" : "dropdown-item"}
                        href="#"
                        onClick={(e) => onClick(e, "name", -1)}>Name Z-A</a>
                    <div className="dropdown-divider"></div>
                    <a className={sort.name === "status" && sort.value === 1 ? "dropdown-item sort_selected" : "dropdown-item"}
                        href="#"
                        onClick={(e) => onClick(e, "status", 1)}>Status Active</a>
                    <a className={sort.name === "status" && sort.value === -1 ? "dropdown-item sort_selected" : "dropdown-item"}
                        href="#"
                        onClick={(e) => onClick(e, "status", -1)}>Status Inactive</a>
                </div>
            </div>
        </div>
    )
}

export default Sort;