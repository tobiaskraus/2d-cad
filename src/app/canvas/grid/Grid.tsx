import React, { FunctionComponent, useMemo } from 'react';

import { getGridGapSizes } from './getGridGapSizes';
import { ViewBox } from '../viewBox/ViewBox';
import LineLabels from './LineLabels';

interface GridProps {
    viewBox: ViewBox;
}

const Grid: FunctionComponent<GridProps> = (props) => {
    const strokeWidth = ((props.viewBox.width + props.viewBox.height) / 2) * 0.001;
    const gridGapSizes = useMemo(
        () => getGridGapSizes(props.viewBox.pixelsPerUnit),
        [props.viewBox.pixelsPerUnit]
    );
    return (
        <>
            <defs>
                <pattern
                    id="smallGrid"
                    width={gridGapSizes.small}
                    height={gridGapSizes.small}
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d={`M ${gridGapSizes.small} 0 L 0 0 0 ${gridGapSizes.small}`}
                        fill="none"
                        stroke="#aaaaaa"
                        strokeWidth={strokeWidth}
                    />
                </pattern>
                <pattern
                    id="grid"
                    width={gridGapSizes.big}
                    height={gridGapSizes.big}
                    patternUnits="userSpaceOnUse"
                >
                    <rect
                        width={gridGapSizes.big}
                        height={gridGapSizes.big}
                        fill="url(#smallGrid)"
                    />
                    <path
                        d={`M ${gridGapSizes.big} 0 L 0 0 0 ${gridGapSizes.big}`}
                        fill="none"
                        stroke="#aaaaaa"
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
            <LineLabels viewBox={props.viewBox} gridGapSizes={gridGapSizes} />
        </>
    );
};

export default Grid;
