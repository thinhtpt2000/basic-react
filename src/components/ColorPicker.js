function ColorPicker(props) {
    const colors = [
        'red',
        'green',
        'blue',
        'yellow'
    ];

    const showColor = (color) => {
        return {
            backgroundColor: color
        }
    }

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    Color Picker
                        </div>
                <div className="card-body">
                    {
                        colors.map((color, index) =>
                            <span
                                className={"ml-2 mr-2 btn btn-color" + (props.color === color ? ' btn-active' : '')}
                                key={index}
                                style={showColor(color)}
                                onClick={() => {props.onReceiveColor(color)}}>
                            </span>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ColorPicker;