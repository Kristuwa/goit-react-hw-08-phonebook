import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../operations';
import {
  addContactFulfilledReduser,
  deleteContactFulfilledReduser,
  fetchContactsFulfilledReduser,
  handleFulfield,
  handlePending,
  handleRejected,
} from './contactsSliceReducers';

const contactsInitialState = { items: [], isLoading: false, error: null };
const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReduser)
      .addCase(addContact.fulfilled, addContactFulfilledReduser)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReduser)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfield)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
