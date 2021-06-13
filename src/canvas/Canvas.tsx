import React, { FunctionComponent, useEffect, useState } from 'react';
import Grid from './components/grid/Grid';
import ViewBoxControl from './components/viewBoxControl/ViewBoxControl';
import { defaultViewBox, getViewBox, ViewBox } from './components/viewBoxControl/ViewBox';

const Canvas: FunctionComponent = () => {
    const [viewBox, setViewBox] = useState<ViewBox>(defaultViewBox);

    // on resize
    useEffect(() => {
        function onResize() {
            const newViewBox = getViewBox({
                centerX: viewBox.x + viewBox.width * 0.5,
                centerY: viewBox.y + viewBox.height * 0.5,
                pixelsPerUnit: viewBox.pixelsPerUnit,
            });
            setViewBox(newViewBox);
        }
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

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
