import { createSlice } from '@reduxjs/toolkit';
import {
	getContacts,
	addContact,
	removeContact,
} from '../contacts/contacts-operations';
// import { removeContact } from "./contacts-actions";

// export const contactsReducer = createReducer([], {
//   [addContact]: (state, { payload }) => {
//     let duplicate = state.find((contact) => contact.name === payload.name);
//     if (duplicate) {
//       alert("Такой контакт уже существует!");
//       return state;
//     } else {
//       return [...state, payload];
//     }
//   },
//   [removeContact]: (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
// });

// const entities = createReducer([], {
//   [getContacts.fulfilled]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [getContacts.pending]: () => true,
//   [getContacts.fulfilled]: () => false,
//   [getContacts.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [getContacts.rejected]: (_, action) => action.payload,
//   [getContacts.pending]: () => null,
// });

// combineReducers({
//   entities,
//   isLoading,
//   error,
// });

//can use IMMER to mutate a copy of a state
const contactsSlice = createSlice({
	name: 'contacts',
	initialState: { entities: [], isLoading: false, error: null },
	extraReducers: {
		[getContacts.fulfilled]: (state, action) => ({
			...state,
			entities: action.payload,
			isLoading: false,
		}),
		[getContacts.pending]: state => ({
			...state,
			isLoading: true,
		}),
		[getContacts.rejected]: state => ({
			...state,
			isLoading: false,
		}),

		[addContact.fulfilled]: (state, action) => ({
			...state,
			entities: [...state.entities, action.payload],
			isLoading: false,
		}),
		[addContact.pending]: state => ({
			...state,
			isLoading: true,
		}),
		[addContact.rejected]: state => ({
			...state,
			isLoading: false,
		}),

		[removeContact.fulfilled]: (state, action) => ({
			...state,
			entities: state.entities.filter(({ id }) => id !== action.payload),
			isLoading: false,
		}),
		[removeContact.pending]: state => ({
			...state,
			isLoading: true,
		}),
		[removeContact.rejected]: state => ({
			...state,
			isLoading: false,
		}),
	},
});

export default contactsSlice.reducer;
