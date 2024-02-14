import React from "react";
import { useSelector } from "react-redux";

//everytime state is accessed - useSelector to access state
const Counter = () => {
    const count = useSelector((state) => state);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default Counter;