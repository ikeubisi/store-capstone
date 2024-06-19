import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import productCartReducer from "./productCartSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    productCart: productCartReducer,
    userName: userReducer,
  },
});

export default store;
