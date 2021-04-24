function SizeSetting() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="card">
                <div className="card-header bg-warning text-dark">
                    Size: 12px
                    </div>
                <div className="card-body">
                    <button className="btn btn-success ml-2 mr-2">Decrease (-)</button>
                    <button className="btn btn-success ml-2 mr-2">Increase (+)</button>
                </div>
            </div>
        </div>
    );
}

export default SizeSetting;