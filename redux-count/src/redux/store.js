import {createStore} from "react-redux";

const reducer = (state=0, action) => {
    switch(action.type) {
        case 'INCREMENT': return state+1;
        case 'DECREMENT': return state-1;
        default: return state;
    }
}

//store is created with reducer inside it
export const store = createStore(reducer);