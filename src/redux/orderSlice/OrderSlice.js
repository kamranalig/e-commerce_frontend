import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/apiConfig";

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (reqData, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/orders/", reqData.address);
      const data = response.data;
      console.log("here os create order", data);
      if (data.id) {
        reqData.navigate({ search: `step=3&order_id=${data.id}` });
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOrderById = createAsyncThunk(
  "order/getOrderById",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/orders/${orderId}`);
      const data = response.data;
      console.log("here os get order", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  orders: [],
  order: null,
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
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
        state.error = null;
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
        state.error = null;
        state.order = action.payload;
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
