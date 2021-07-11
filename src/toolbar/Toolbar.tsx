import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../hooks';
import { create as createShape } from '../features/shapes/shapesSlice';
import Icon from './components/Icon';
import { ShapeType } from '../shapes/ShapeType';

enum Tool {
    LINE,
    RECT,
}

const Toolbar: FunctionComponent = () => {
    const [activeTool, setActiveTool] = useState(Tool.LINE);

    const dispatch = useAppDispatch();

    const onIconClick = (tool: Tool) => {
        setActiveTool(tool);
        switch (tool) {
            case Tool.RECT:
                dispatch(createShape(ShapeType.RECT));
        }
    };

    return (
        <ToolbarWrapper>
            <Icon
                text="L"
                hoverText="line"
                active={activeTool === Tool.LINE}
                onClick={() => onIconClick(Tool.LINE)}
            />
            <Icon
                text="R"
                hoverText="rect"
                active={activeTool === Tool.RECT}
                onClick={() => onIconClick(Tool.RECT)}
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
