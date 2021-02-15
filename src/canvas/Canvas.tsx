import React, { FunctionComponent, useState } from 'react';
import ViewBoxControl, { ViewBox } from './components/ViewBoxControl';

interface CanvasProps {
    className?: string;
}

const Canvas: FunctionComponent<CanvasProps> = (props) => {
    const [viewBox, setViewBox] = useState<ViewBox>({ x: 0, y: 0, width: 300, height: 250 });

    console.log('viewBox', viewBox);
    return (
        <div>
            <ViewBoxControl value={viewBox} onChange={setViewBox} />
            <svg
                viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    width="100"
                    height="70"
                    style={{ fill: 'rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)' }}
                />
            </svg>
        </div>
    );
};

export default Canvas;
