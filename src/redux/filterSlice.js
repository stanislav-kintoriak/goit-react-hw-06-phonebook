import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterChange(state, action) {
      return action.payload;
    },
  },
});




// Експортуємо генератори екшенів та редюсер
export const { filterChange } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
