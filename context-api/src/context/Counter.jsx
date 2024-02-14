import {createContext, useState} from "react";

//context
export const CounterContext = createContext(null);

//context provider- count and setcount states
export const CounterProvider = (props) => {
    const [count, setCount] = useState(0);
    return  (
    <CounterContext.Provider value={{count, setCount,}}> 
        {props.children} 
    </CounterContext.Provider>
    )
}