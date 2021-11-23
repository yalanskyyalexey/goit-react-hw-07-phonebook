import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filter-reducer';
import contactsSlice from './contacts/contacts-reducer';

export const store = configureStore({
	reducer: {
		contacts: contactsSlice,
		filter: filterReducer,
	},
	devTools: process.env.NODE_ENV === 'development',
});
