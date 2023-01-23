import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
// import counterReducer from '../features/counter/counterSlice';


export const store = configureStore({
  reducer: {
    campsites: campsitesReducer
  },
});
