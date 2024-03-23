import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";

// Function to persist user authentication details in local storage
const persistAuthState = (state) => {
  localStorage.setItem("authState", JSON.stringify(state));
};

// Function to load user authentication details from local storage
const loadAuthState = () => {
  const authState = localStorage.getItem("authState");
  return authState ? JSON.parse(authState) : null;
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/signup`,
        userData
      );
      const user = response.data;
      if (user.jwt) {
        persistAuthState({ jwt: user.jwt, user }); // Store both JWT token and user object
        dispatch(fetchUserDetails(user.jwt)); // Dispatch fetchUserDetails after successful registration
      }
      return user.jwt;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/signin`,
        userData
      );
      const user = response.data;
      if (user.jwt) {
        persistAuthState({ jwt: user.jwt, user }); // Store both JWT token and user object
        dispatch(fetchUserDetails(user.jwt)); // Dispatch fetchUserDetails after successful login
      }
      return user.jwt;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserDetails = createAsyncThunk(
  "auth/fetchUserDetails",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = loadAuthState() || {
  user: null,
  isLoading: false,
  error: null,
  jwt: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.jwt = null;
      state.user = null;
      localStorage.removeItem("authState"); // Remove the entire authState from local storage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.jwt = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.jwt = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
