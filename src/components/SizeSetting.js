import { MIN_FONT_SIZE, MAX_FONT_SIZE } from "../utils/AppConstant";

function SizeSetting(props) {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="card">
                <div className="card-header bg-warning text-dark">
                    Size: {props.fontSize}px
                    </div>
                <div className="card-body">
                    <button className={"btn btn-success ml-2 mr-2" + (props.fontSize === MIN_FONT_SIZE ? " disabled" : "")}
                        onClick={() => props.onReceiveSize(false)}>
                        Decrease (-)
                    </button>
                    <button className={"btn btn-success ml-2 mr-2" + (props.fontSize === MAX_FONT_SIZE ? " disabled" : "")}
                        onClick={() => props.onReceiveSize(true)}>
                        Increase (+)
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SizeSetting;