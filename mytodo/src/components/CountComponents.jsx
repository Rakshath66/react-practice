import React, {useState} from "react";

const CounterComponent = () => {
    const [count, setCount]= useState(0);
    console.log(count);

    return (
        <div>
            <p>Count Component - {count}</p>
            <h6>Number is {count % 2 ? "Odd": "Even.,k"}</h6>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    );
};

export default CounterComponent;