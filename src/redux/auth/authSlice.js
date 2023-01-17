import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  actionPending,
  actionRejected,
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
  isLoading: false,
  error: null,
};

const extraActions = [register, logIn, logOut];
const getActions = type => extraActions.map(action => action[type]);

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
      .addCase(refreshUser.rejected, refreshUserRejectedReducer)
      .addMatcher(isAnyOf(...getActions('pending')), actionPending)
      .addMatcher(isAnyOf(...getActions('rejected')), actionRejected);
  },
});

export const authReducer = authSlice.reducer;
