import { configureStore } from '@reduxjs/toolkit';
import shapesReducer from '../features/shapes/shapesSlice';
import toolsReducer from '../features/tools/toolsSlice';

export const store = configureStore({
    reducer: {
        shapes: shapesReducer,
        tools: toolsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
