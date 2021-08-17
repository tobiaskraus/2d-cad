import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Tool {
    SELECT,
    HAND,
    CREATE_LINE,
    CREATE_RECT,
}

export interface ToolsState {
    activeTool: Tool;
}

export const initialState: ToolsState = {
    activeTool: Tool.SELECT,
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

export const { setActiveTool } = toolsSlice.actions;

export default toolsSlice.reducer;
