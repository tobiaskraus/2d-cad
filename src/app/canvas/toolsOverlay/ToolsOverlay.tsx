import React, { FunctionComponent } from 'react';

import { config } from '../../../config';
import { Tool } from '../../../features/tools/toolsSlice';
import { useAppSelector } from '../../../hooks';
import { ViewBox } from '../viewBox/ViewBox';
import CreateLineOverlay from './CreateLineOverlay';
import CreateRectOverlay from './CreateRectOverlay';
import HandOverlay from './HandOverlay';

interface ToolsOverlayProps {
    viewBox: ViewBox;
    setViewBox: (cb: (valOld: ViewBox) => ViewBox) => void;
}

const ToolsOverlay: FunctionComponent<ToolsOverlayProps> = (props) => {
    const activeTool = useAppSelector((state) => state.tools.activeTool);
    const textSize = (props.viewBox.height + props.viewBox.width) * config.RELATIVE_TEXT_SIZE;

    switch (activeTool) {
        case Tool.HAND:
            return <HandOverlay viewBox={props.viewBox} setViewBox={props.setViewBox} />;
        case Tool.CREATE_LINE:
            return <CreateLineOverlay viewBox={props.viewBox} textSize={textSize} />;
        case Tool.CREATE_RECT:
            return <CreateRectOverlay viewBox={props.viewBox} textSize={textSize} />;
        default:
            return null;
    }
};

export default ToolsOverlay;
