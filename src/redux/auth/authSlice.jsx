import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

// const extraActions = [register, logIn, refreshUser];

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      // .addMatcher(
      //   isAnyOf(...extraActions.map(action => action.fulfilled)),
      //   state => {
      //     state.isLoggedIn = true;
      //     state.error = null;
      //     state.isRefreshing = false;
      //   }
      // )
      // .addMatcher(
      //   isAnyOf(...extraActions.map(action => action.pending)),
      //   state => {
      //     state.isRefreshing = true;
      //   }
      // )
      // .addMatcher(
      //   isAnyOf(...extraActions.map(action => action.rejected)),
      //   (state, action) => {
      //     state.error = action.payload;
      //     state.isRefreshing = false;
      //   }
      // ),
});

export const authReducer = authSlice.reducer;
