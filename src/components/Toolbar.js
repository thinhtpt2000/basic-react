import Search from "./Search";
import Sort from "./Sort";

function Toolbar() {
    return (
        <div className="Toolbar">
            <div className="row mt-2">
                <Search />
                <Sort />
            </div>
        </div>
    );
}

export default Toolbar;
