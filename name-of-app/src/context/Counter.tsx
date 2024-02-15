import { useState } from "react";
import { createContext, useContext } from "react";

interface CounterContextValue {
    value: number,
    setCount: (num: number) => void;
}

interface CounterProviderProps {
    children: React.ReactNode;
}

const CounterContext = createContext<CounterContextValue | null>(null);

export const useCounter = () => {
    return useContext(CounterContext);
}

export const CounterProvider: React.FC<CounterProviderProps> = (props) => {
    const [count, setCount] = useState<number>(0);

    return (
        <CounterContext.Provider value={{value: count, setCount}}>
            {props.children}
        </CounterContext.Provider>
    )
}