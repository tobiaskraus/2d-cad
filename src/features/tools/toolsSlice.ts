import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Tool {
    HAND,
    CREATE_LINE,
    CREATE_RECT,
}

export interface ToolsState {
    activeTool: Tool;
}

export const initialState: ToolsState = {
    activeTool: Tool.HAND,
};

export const toolsSlice = createSlice({
    name: 'tools',
    initialState,
    reducers: {
        setActiveTool: (state, action: PayloadAction<Tool>) => {
            state.activeTool = action.payload;
        },
        onSvgCanvasClicked: (state, action: PayloadAction<{ x: number; y: number }>) => {
            const coords = action.payload;
            switch (state.activeTool) {
                case Tool.CREATE_LINE:
                    console.log('create line at', coords);
                    // would like to dispatch(create(SHAPES.LINE)) from shapesSlice, but that's not allowed
                    break;
                case Tool.CREATE_RECT:
                    console.log('create rect at', coords);
                    // would like to dispatch(create(SHAPES.RECT)) from shapesSlice, but that's not allowed
                    break;
                case Tool.HAND:
                default:
                    console.log('nothing');
            }
        },
    },
});

export const { setActiveTool, onSvgCanvasClicked } = toolsSlice.actions;

export default toolsSlice.reducer;
