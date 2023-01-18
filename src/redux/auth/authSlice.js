import { createSlice } from '@reduxjs/toolkit';
import {
  logInFulfilledReducer,
  logOutFulfilledReducer,
  refreshUserFulfilledReducer,
  refreshUserPendingReducer,
  refreshUserRejectedReducer,
  registerFulfilledReducer,
} from './authSliceReducers';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, registerFulfilledReducer)
      .addCase(logIn.fulfilled, logInFulfilledReducer)
      .addCase(logOut.fulfilled, logOutFulfilledReducer)
      .addCase(refreshUser.pending, refreshUserPendingReducer)
      .addCase(refreshUser.fulfilled, refreshUserFulfilledReducer)
      .addCase(refreshUser.rejected, refreshUserRejectedReducer);
  },
});

export const authReducer = authSlice.reducer;
