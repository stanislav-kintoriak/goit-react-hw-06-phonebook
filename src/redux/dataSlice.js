import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

const contactsInitialState = [];

const dataSlice = createSlice({
  // Ім'я слайсу
  name: 'data',
  // Початковий стан редюсера слайсу
  initialState: contactsInitialState,
  // Об'єкт редюсерів
  reducers: {
    formSubmit: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    contactDelete: {
      reducer(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
      },
    },
  },
});

// Експортуємо генератори екшенів та редюсер
// Генератори екшенів
export const { formSubmit, contactDelete } = dataSlice.actions;
// Редюсер слайсу
export const contactReducer = dataSlice.reducer;
