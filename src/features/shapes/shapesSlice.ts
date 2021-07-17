import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Rect } from '../../shapes/Rect';
import { ShapeObject } from '../../shapes/ShapeObject';
import { ShapeType } from '../../shapes/ShapeType';

export interface ShapesState {
    layers: ShapeObject[];
}

export const initialState: ShapesState = {
    layers: [
        {
            id: 1,
            x: 20,
            y: 30,
            fill: 'red',
            shape: {
                type: ShapeType.RECT,
                width: 5,
                height: 4,
            } as Rect,
        },
        {
            id: 11,
            x: 0,
            y: 50,
            fill: 'purple',
            shape: {
                type: ShapeType.LINE,
                x2: 60,
                y2: 70,
            },
        },
    ],
};

export const shapesSlice = createSlice({
    name: 'shapes',
    initialState,
    reducers: {
        create: (state, action: PayloadAction<ShapeObject>) => {
            console.log('create reducer called');
            state.layers.push(action.payload);
        },
    },
});

export const { create } = shapesSlice.actions;

export default shapesSlice.reducer;
