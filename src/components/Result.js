function Result(props) {
    const onChangeFormat = () => {
        return {
            border: "1px solid " + props.color,
            color: props.color,
            fontSize: props.size + "px"
        }
    }
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>Color: {props.color} - Font size: {props.size}px</p>
            <p className="p-3 content" style={onChangeFormat()}>Content setting</p>
        </div>
    );
}

export default Result;