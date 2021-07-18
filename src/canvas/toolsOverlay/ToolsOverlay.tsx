import React, { FunctionComponent } from 'react';
import { Tool } from '../../features/tools/toolsSlice';
import { useAppSelector } from '../../hooks';
import { ViewBox } from '../viewBox/ViewBox';
import CreateLineOverlay from './CreateLineOverlay';
import HandOverlay from './HandOverlay';

interface ToolsOverlayProps {
    viewBox: ViewBox;
    setViewBox: (cb: (valOld: ViewBox) => ViewBox) => void;
}

const ToolsOverlay: FunctionComponent<ToolsOverlayProps> = (props) => {
    const activeTool = useAppSelector((state) => state.tools.activeTool);

    switch (activeTool) {
        case Tool.HAND:
            return <HandOverlay viewBox={props.viewBox} setViewBox={props.setViewBox} />;
        case Tool.CREATE_LINE:
            return <CreateLineOverlay viewBox={props.viewBox} />;
        default:
            return null;
    }
};

export default ToolsOverlay;
