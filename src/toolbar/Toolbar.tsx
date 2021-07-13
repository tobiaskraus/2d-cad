import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks';
import Icon from './components/Icon';
import { setActiveTool, Tool } from '../features/tools/toolsSlice';

const Toolbar: FunctionComponent = () => {
    const activeTool = useAppSelector((state) => state.tools.activeTool);
    const dispatch = useAppDispatch();

    const onToolClick = (tool: Tool) => {
        if (tool === activeTool) {
            return;
        }
        dispatch(setActiveTool(tool));
    };

    return (
        <ToolbarWrapper>
            <Icon
                text="H"
                hoverText="hand"
                active={activeTool === Tool.HAND}
                onClick={() => onToolClick(Tool.HAND)}
            />
            <Icon
                text="L"
                hoverText="line"
                active={activeTool === Tool.CREATE_LINE}
                onClick={() => onToolClick(Tool.CREATE_LINE)}
            />
            <Icon
                text="R"
                hoverText="rect"
                active={activeTool === Tool.CREATE_RECT}
                onClick={() => onToolClick(Tool.CREATE_RECT)}
            />
        </ToolbarWrapper>
    );
};

export default Toolbar;

const ToolbarWrapper = styled.div`
    position: absolute;
    z-index: 10;
    top: 80px;
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    box-shadow: 0 8px 16px 0 rgb(0 0 0 / 12%);
`;
