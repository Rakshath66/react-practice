import React, { useContext } from "react";
import { CounterContext } from "../context/Counter";

const Counter = () => {
    //acessing state data inside context
    const counterContext = useContext(CounterContext);
    return (
    <div>
        <button onClick={() => counterContext.setCount(counterContext.count+1)}>Increment</button>
        <button onClick={() => counterContext.setCount(counterContext.count-1)}>Decrement</button>
    </div>
    );
}

export default Counter;