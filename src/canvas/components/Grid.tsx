import React, { FunctionComponent, useCallback, useState } from 'react';
import { ViewBox } from './ViewBoxControl';

interface GridProps {
    viewBox: ViewBox;
}

const Grid: FunctionComponent<GridProps> = (props) => {
    const strokeWidth = ((props.viewBox.width + props.viewBox.height) / 2) * 0.001;
    return (
        <>
            <defs>
                <pattern id="smallGrid" width="1" height="1" patternUnits="userSpaceOnUse">
                    <path d="M 1 0 L 0 0 0 1" fill="none" stroke="gray" strokeWidth={strokeWidth} />
                </pattern>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <rect width="10" height="10" fill="url(#smallGrid)" />
                    <path
                        d="M 10 0 L 0 0 0 10"
                        fill="none"
                        stroke="gray"
                        strokeWidth={strokeWidth * 2}
                    />
                </pattern>
            </defs>
            <rect
                x={props.viewBox.x}
                y={props.viewBox.y}
                width={props.viewBox.width}
                height={props.viewBox.height}
                fill="url(#grid)"
            />
        </>
    );
};

export default Grid;

const LineLabels: FunctionComponent<GridProps> = (props) => {
    const [cols, setCols] = useState([]);

    useCallback(() => {
        const tempCols = [];
    }, []);

    return <text>Bla</text>;
};
