import React, { FunctionComponent } from 'react';
import Grid from './grid/Grid';
import ViewBoxControl from './viewBox/ViewBoxControl';
import { useViewBox } from './viewBox/useViewBox';
import ShapeLayers from './shapeLayers/ShapeLayers';
import ToolsOverlay from './toolsOverlay/ToolsOverlay';

const Canvas: FunctionComponent = () => {
    const [viewBox, setViewBox] = useViewBox();

    return (
        <div>
            <ViewBoxControl value={viewBox} onChange={setViewBox} />
            <svg
                preserveAspectRatio="xMidYMid slice"
                viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
                xmlns="http://www.w3.org/2000/svg"
                width="500"
                height="500"
                style={{
                    height: '100vh',
                    width: '100vw',
                }}
            >
                <Grid viewBox={viewBox} />
                <ShapeLayers viewBox={viewBox} />
                <ToolsOverlay viewBox={viewBox} setViewBox={setViewBox} />
            </svg>
        </div>
    );
};

export default Canvas;
