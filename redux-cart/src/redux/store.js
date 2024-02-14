import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

//setting reducer inside store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: true,
});
