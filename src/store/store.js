// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { api } from '../../services/Todo';
 
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
