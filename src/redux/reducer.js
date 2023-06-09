import { combineReducers } from 'redux';

const contactsInitialState = [];

const contactReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'data/formSubmit': {
      return [...state, action.payload];
    }
    case 'data/contactDelete': {
      return [...state.filter(contact.id !== action.payload)];
    }

    default:
      return state;
  }
};

const filterInitialState = '';

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/filterChange': {
      return action.payload;
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
