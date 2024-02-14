import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

//code quality
export const useCart = () => {
    const cart = useContext(CartContext);

    return cart;
}

//storing state of items in context
export const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    return (
    <CartContext.Provider value={{items, setItems}}>
        {props.children}
    </CartContext.Provider>
    );
}