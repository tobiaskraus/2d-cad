import React, { FunctionComponent } from 'react';
import { Tool } from '../../features/tools/toolsSlice';
import { useAppSelector } from '../../hooks';
import { ViewBox } from '../viewBox/ViewBox';
import CreateLineOverlay from './CreateLineOverlay';

interface ToolsOverlayProps {
    viewBox: ViewBox;
}

const ToolsOverlay: FunctionComponent<ToolsOverlayProps> = (props) => {
    const activeTool = useAppSelector((state) => state.tools.activeTool);

    switch (activeTool) {
        case Tool.HAND:
            return null;
        case Tool.CREATE_LINE:
            return <CreateLineOverlay viewBox={props.viewBox} />;
        default:
            return null;
    }
};

export default ToolsOverlay;
