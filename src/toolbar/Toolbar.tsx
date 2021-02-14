import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import Icon from './components/Icon';

enum Tool {
    LINE,
    RECT,
}

const Toolbar: FunctionComponent = () => {
    const [activeTool, setActiveTool] = useState(Tool.LINE);

    const onIconClick = (tool: Tool) => {
        setActiveTool(tool);
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
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    box-shadow: 0 8px 16px 0 rgb(0 0 0 / 12%);
`;
