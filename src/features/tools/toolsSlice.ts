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
    },
});

export const { setActiveTool, onSvgCanvasClicked } = toolsSlice.actions;

export default toolsSlice.reducer;
