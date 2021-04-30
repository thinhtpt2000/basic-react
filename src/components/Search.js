import { useState } from "react";

function Search(props) {
    const [keyword, setKeyword] = useState("");

    const onChange = (event) => {
        let target = event.target;
        setKeyword(target.value);
    }

    const onSearch = (event) => {
        event.preventDefault();
        props.handleSearch(keyword);
    }

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form>
                <div className="form-row align-items-center">
                    <div className="col-xs-8">
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

export default Search;