import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/apiConfig";

// Define initial state
const initialState = {
  orders: [],
  order: null,
  loading: false,
  error: null,
};

// Define thunk for creating order
export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (address, { rejectWithValue }) => {
    console.log("here is addres", address);
    try {
      const { data } = await api.post("/api/orders/", address);
      console.log("created order", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Define thunk for getting order by ID
export const getOrderById = createAsyncThunk(
  "orders/getOrderById",
  async (orderId, { rejectWithValue }) => {
    console.log("here is alllllllllllllllllllllllllllllliddssssss", orderId);
    try {
      const { data } = await api.get(`/api/orders/${orderId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create order slice
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getOrderById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
