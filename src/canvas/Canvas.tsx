import React, { FunctionComponent } from 'react';
import Grid from './grid/Grid';
import ViewBoxControl from './viewBox/ViewBoxControl';
import { useViewBox } from './viewBox/useViewBox';

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
                <rect
                    x="10"
                    y="20"
                    width="10"
                    height="20"
                    style={{ fill: 'rgb(0,0,255)', strokeWidth: 0.2, stroke: 'rgb(0,0,0)' }}
                />
            </svg>
        </div>
    );
};

export default Canvas;
