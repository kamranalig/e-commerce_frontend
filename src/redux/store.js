import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/AuthSlice";
import ProductSlice from "./productSlice/ProductSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: ProductSlice,
  },
});

export default store;
