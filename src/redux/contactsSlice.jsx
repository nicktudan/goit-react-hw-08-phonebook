import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';


const contactsInitialState = { items: [], isLoading: false, error: null };

const extraActions = [fetchContacts, addContact, deleteContact];

const handleFetchContatcs = (state, action) => {
  state.items = action.payload;
};

const handleAddContatcs = (state, action) => {
  state.items.push(action.payload);
};

const handleDeleteContatcs = (state, action) => {
  const index = state.items.findIndex(({ id }) => id === action.payload.id);
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContatcs)
      .addCase(addContact.fulfilled, handleAddContatcs)
      .addCase(deleteContact.fulfilled, handleDeleteContatcs)
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.pending)),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
