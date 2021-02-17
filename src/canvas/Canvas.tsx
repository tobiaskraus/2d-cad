import React, { FunctionComponent, useState } from 'react';
import Grid from './components/grid/Grid';
import ViewBoxControl, { ViewBox } from './components/ViewBoxControl';

interface CanvasProps {
    className?: string;
}

const Canvas: FunctionComponent<CanvasProps> = (props) => {
    const [viewBox, setViewBox] = useState<ViewBox>({ x: 0, y: 0, width: 80, height: 60 });

    console.log('viewBox', viewBox);
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
                <rect
                    x="10"
                    y="20"
                    width="10"
                    height="20"
                    style={{ fill: 'rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)' }}
                />
            </svg>
        </div>
    );
};

export default Canvas;
