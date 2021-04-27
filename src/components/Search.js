function Search() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form>
                <div className="form-row align-items-center">
                    <div className="col-xs-8">
                        <label className="sr-only" htmlFor="txtSearch">Name</label>
                        <input type="text" className="form-control mb-2" id="txtSearch" name="txtSearch" placeholder="Search value" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-2">
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