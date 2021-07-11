import { configureStore } from '@reduxjs/toolkit';
import shapesReducer from '../features/shapes/shapesSlice';

export const store = configureStore({
    reducer: {
        shapes: shapesReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
