// import {formSubmit,contactDelete,filterChange} from './actions'


// import {createReducer} from '@reduxjs/toolkit'


// const contactsInitialState = [ { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },];



// export const contactReducer = createReducer(contactsInitialState, {
//     [formSubmit]: (state, action) => { return [...state, action.payload];},
//     [contactDelete]: (state, action) => { return [...state.filter(contact => contact.id !== action.payload)];},
// })

// // export const contactReducer = (state = contactsInitialState, action) => {
// //   switch (action.type) {
// //     case formSubmit.type: {
// //       return [...state, action.payload];
// //     }
// //     case contactDelete.type: {
// //       return [...state.filter(contact => contact.id !== action.payload)];
// //     }

// //     default:
// //       return state;
// //   }
// // };

// const filterInitialState = '';


// export const filterReducer = createReducer(filterInitialState, {
//     [filterChange]: (state, action) => {  return action.payload;},

// })



// // export const filterReducer = (state = filterInitialState, action) => {
// //   switch (action.type) {
// //     case filterChange.type: {
// //       return action.payload;
// //     }
// //     default:
// //       return state;
// //   }
// // };
