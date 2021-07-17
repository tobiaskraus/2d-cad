import React, { FunctionComponent } from 'react';
import Grid from './grid/Grid';
import ViewBoxControl from './viewBox/ViewBoxControl';
import { useViewBox } from './viewBox/useViewBox';
import ShapeLayers from './shapeLayers/ShapeLayers';
import { onSvgCanvasClicked } from '../features/tools/toolsSlice';
import { useAppDispatch } from '../hooks';

const Canvas: FunctionComponent = () => {
    const [viewBox, setViewBox] = useViewBox();
    const dispatch = useAppDispatch();

    const onSvgClick = (e: React.MouseEvent<SVGElement>) => {
        const x = e.clientX / viewBox.pixelsPerUnit + viewBox.x;
        const y = e.clientY / viewBox.pixelsPerUnit + viewBox.y;
        dispatch(onSvgCanvasClicked({ x, y }));
    };

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
                onClick={onSvgClick}
            >
                <Grid viewBox={viewBox} />
                <ShapeLayers />
            </svg>
        </div>
    );
};

export default Canvas;
