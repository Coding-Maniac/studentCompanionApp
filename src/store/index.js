import {configureStore} from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
import {setupListeners} from '@reduxjs/toolkit/query';
export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

setupListeners(store.dispatch);
