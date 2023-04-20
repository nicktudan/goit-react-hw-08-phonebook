import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';
// import { register, logIn, logOut, refreshUser } from './operations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  authInitialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, actions) => state)
      .addCase(register.fulfilled, (state, actions) => {})
      .addCase(register.rejected, (state, actions) => state),
});

export const authReducer = authSlice.reducer;
