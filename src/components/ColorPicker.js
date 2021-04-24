function ColorPicker() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    Color Picker
                        </div>
                <div className="card-body">
                    <span className="ml-2 mr-2 btn btn-color btn-active"></span>
                    <span className="ml-2 mr-2 btn btn-color"></span>
                    <span className="ml-2 mr-2 btn btn-color"></span>
                    <span className="ml-2 mr-2 btn btn-color"></span>
                </div>
            </div>
        </div>
    );
}

export default ColorPicker;