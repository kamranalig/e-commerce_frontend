import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../config/apiConfig";

export const findProducts = createAsyncThunk(
  "products/findProducts",
  async (reqData, { rejectWithValue }) => {
    const {
      colors,
      sizes,
      minPrice,
      maxPrice,
      minDiscount,
      category,
      stock,
      sort,
      pageNumber,
      pageSize,
    } = reqData;
    try {
      const { data } = await api.get(`/api/products`, {
        params: {
          colors,
          sizes,
          minPrice,
          maxPrice,
          minDiscount,
          category,
          stock,
          sort,
          pageNumber,
          pageSize,
        },
      });
      console.log("here is data of all products product", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const findProductById = createAsyncThunk(
  "products/findProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/api/products/id/${productId}`);
      console.log("here is data of single product", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(findProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(findProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.product = action.payload;
      })
      .addCase(findProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
