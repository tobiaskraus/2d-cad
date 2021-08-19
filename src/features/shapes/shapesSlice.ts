import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { config } from '../../config';
import { Rect } from '../../shapes/Rect';
import { ShapeObject } from '../../shapes/ShapeObject';
import { ShapeType } from '../../shapes/ShapeType';

export interface ShapesState {
    selectedIds: number[];
    layers: ShapeObject[];
}

export const initialState: ShapesState = {
    selectedIds: [],
    layers: [
        {
            id: 1,
            x: 20,
            y: 30,
            fill: config.COLORS.softPrimary,
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
            fill: config.COLORS.softPrimary,
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
        createShape: (state, action: PayloadAction<ShapeObject>) => {
            state.layers.push(action.payload);
        },

        /** pass empty array in order to deselect */
        selectShape: (state, action: PayloadAction<{ ids: number[] }>) => {
            state.selectedIds = action.payload.ids;
            state.layers.map((shape) => (shape.selected = action.payload.ids.includes(shape.id)));
        },

        deleteSelectedShape: (state) => {
            state.layers = state.layers.filter((layer) => !state.selectedIds.includes(layer.id));
        },

        modifyShape: (state, action: PayloadAction<Partial<ShapeObject>>) => {
            let shapeIndex = state.layers.findIndex((shape) => shape.id === action.payload.id);
            if (shapeIndex === -1) return;
            state.layers.splice(shapeIndex, 1, { ...state.layers[shapeIndex], ...action.payload });
        },
    },
});

export const { createShape, selectShape, deleteSelectedShape, modifyShape } = shapesSlice.actions;

export default shapesSlice.reducer;
