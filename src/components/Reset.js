function Reset(props) {
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button className="btn btn-danger" onClick={() => props.onClickReset()}>Reset</button>
        </div>
    );
}

export default Reset;