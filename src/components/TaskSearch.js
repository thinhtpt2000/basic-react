import { useState } from "react";
import { connect } from "react-redux";
import { searchTask } from "./../actions/index";

function TaskSearch(props) {
    const [keyword, setKeyword] = useState("");

    const onChange = (event) => {
        let target = event.target;
        setKeyword(target.value);
    }

    const onSearch = (event) => {
        event.preventDefault();
        props.searchTask(keyword);
    }

    return (
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <form>
                <div className="form-row align-items-center">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <label className="sr-only" htmlFor="txtSearch">Name</label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            id="txtSearch"
                            name="txtSearch"
                            placeholder="Search value"
                            value={keyword}
                            onChange={onChange}
                        />
                    </div>
                    <div className="col-auto">
                        <button
                            type="submit"
                            className="btn btn-primary mb-2"
                            onClick={onSearch}
                        >
                            <i className="fas fa-search"></i>
                            &nbsp;
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        searchTask: (keyword) => {
            dispatch(searchTask(keyword));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskSearch);