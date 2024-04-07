// paymentSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/apiConfig";

export const createPayment = createAsyncThunk(
  "payment/create",
  async (reqData, { rejectWithValue }) => {
    try {
      const response = await api.post(`/api/payments/${reqData.orderId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updatePayment = createAsyncThunk(
  "payment/update",
  async (reqData, { rejectWithValue }) => {
    try {
      const response = await api.put("/api/payments", reqData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    loading: false,
    error: null,
    paymentIntent: null,
    paymentSuccess: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.paymentSuccess = false; // Reset payment success status
      })
      .addCase(createPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentIntent = action.payload;
        state.paymentSuccess = true; // Set payment success status
      })
      .addCase(createPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.paymentSuccess = false; // Reset payment success status
      })
      .addCase(updatePayment.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.paymentSuccess = false; // Reset payment success status
      })
      .addCase(updatePayment.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentIntent = action.payload;
        state.paymentSuccess = true; // Set payment success status
      })
      .addCase(updatePayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.paymentSuccess = false; // Reset payment success status
      });
  },
});

export default paymentSlice.reducer;
