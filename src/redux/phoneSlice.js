import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const phoneSlice = createSlice({
  name: 'phone',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(obj) {
        const { name, phoneNumber } = obj;
        return {
          payload: {
            name,
            phoneNumber,
            id: nanoid(),
          },
        };
      },
    },
    removeContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, updateFilter, setContacts } =
  phoneSlice.actions;
export const phoneReducer = phoneSlice.reducer;
