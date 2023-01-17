import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import {
  addContactFulfilledReducer,
  deleteContactFulfilledReducer,
  fetchContactsFulfilledReducer,
  handleFulfilled,
  handlePending,
  handleRejected,
  logOutFulfilledReducer,
} from './contactsSliceReducers';
import { logOut } from 'redux/auth/operations';

const contactsInitialState = { items: [], isLoading: false, error: null };
const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addCase(logOut.fulfilled, logOutFulfilledReducer)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
