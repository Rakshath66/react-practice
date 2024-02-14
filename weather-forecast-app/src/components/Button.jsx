import React from "react";
//for fetching data or for refreshing
const Button = (props) => {
    return (
        <button className="btn" onClick={props.onClick}>
            {props.value}
        </button>
    )
};

export default Button;