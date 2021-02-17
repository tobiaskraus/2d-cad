import React, { FunctionComponent, useEffect, useState } from 'react';
import { findNumberSequenceInRange } from '../../../utils/findNumberSequenceInRange';
import { ViewBox } from '../ViewBoxControl';

interface LineLabelsProps {
    viewBox: ViewBox;
    gridGapSize: number;
}

const LineLabels: FunctionComponent<LineLabelsProps> = (props) => {
    const [cols, setCols] = useState<number[]>([]);

    useEffect(() => {
        const xMin = props.viewBox.x;
        const xMax = props.viewBox.x + props.viewBox.width;
        const tempCols = findNumberSequenceInRange(xMin, xMax, props.gridGapSize);
        setCols(tempCols);
    }, [props.viewBox]);

    return (
        <>
            {cols.map((x) => (
                <text
                    x={x}
                    y={props.viewBox.height - props.viewBox.height * 0.01 + props.viewBox.y}
                    fontSize={props.gridGapSize * 0.1}
                >
                    {x}
                </text>
            ))}
        </>
    );
};

export default LineLabels;
