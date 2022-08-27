import { configureStore } from '@reduxjs/toolkit';
import { contactListSlice } from './contactList/slice';
import { filterSlice } from './filter/slice';

export const store = configureStore({
  reducer: {
    contactList: contactListSlice.reducer,
    filter: filterSlice.reducer,
  },
});
