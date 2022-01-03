import Button from "react-bootstrap"

function Buttons(props) {
    return (
        <div className="salad">
            <Button className={props.className}>
                {props.value}
            </Button>
        </div>

    );
}
export default Buttons;