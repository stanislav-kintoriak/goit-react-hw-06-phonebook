import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactReducer } from "./dataSlice";
import { filterReducer } from "./filterSlice";



const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter']
}

const reducer = combineReducers({
  contacts:contactReducer,
  filter:filterReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)



export const store = configureStore({
  reducer:persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});


export const persistor = persistStore(store)
