import React, { FunctionComponent, useCallback, useState } from 'react';
import { ViewBox } from './ViewBoxControl';

interface GridProps {
    viewBox: ViewBox;
}

const Grid: FunctionComponent<GridProps> = (props) => {
    const strokeWidth = ((props.viewBox.width + props.viewBox.height) / 2) * 0.001;
    const gridGapSize = useMemo(() => getGridGapSize(props.viewBox.width), [props.viewBox]);
    return (
        <>
            <defs>
                <pattern
                    id="smallGrid"
                    width={gridGapSize * 0.1}
                    height={gridGapSize * 0.1}
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d={`M ${gridGapSize * 0.1} 0 L 0 0 0 ${gridGapSize * 0.1}`}
                        fill="none"
                        stroke="gray"
                        strokeWidth={strokeWidth}
                    />
                </pattern>
                <pattern
                    id="grid"
                    width={gridGapSize}
                    height={gridGapSize}
                    patternUnits="userSpaceOnUse"
                >
                    <rect width={gridGapSize} height={gridGapSize} fill="url(#smallGrid)" />
                    <path
                        d={`M ${gridGapSize} 0 L 0 0 0 ${gridGapSize}`}
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

export function getGridGapSize(width: number): number {
    let gapSize = 1;
    let scaledWidth = width;
    if (width > 20) {
        while (scaledWidth > 20) {
            gapSize *= 10;
            scaledWidth = scaledWidth / 10;
        }
    } else {
        while (scaledWidth < 2) {
            gapSize /= 10;
            scaledWidth = scaledWidth * 10;
        }
    }
    return gapSize;
}

    useCallback(() => {
        const tempCols = [];
    }, []);

    return <text>Bla</text>;
};
