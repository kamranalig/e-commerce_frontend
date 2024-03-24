import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/AuthSlice";
import ProductReducer from "./productSlice/ProductSlice";
import cartReducer from "./cartSlice/CartSlice";
import orderReducer from "./orderSlice/OrderSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    products: ProductReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
