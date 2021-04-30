import Search from "./Search";
import Sort from "./Sort";

function Toolbar(props) {
    return (
        <div className="Toolbar">
            <div className="row mt-2">
                <Search handleSearch={props.handleSearch} />
                <Sort handleSort={props.handleSort} />
            </div>
        </div>
    );
}

export default Toolbar;
