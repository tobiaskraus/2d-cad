import React, { FunctionComponent, useEffect, useState } from 'react';
import { findNumberSequenceInRange } from '../../../utils/findNumberSequenceInRange';
import { ViewBox } from '../viewBoxControl/ViewBox';

interface LineLabelsProps {
    viewBox: ViewBox;
    gridGapSize: number;
}

const LineLabels: FunctionComponent<LineLabelsProps> = (props) => {
    const [xVals, setXVals] = useState<number[]>([]);
    const [yVals, setYVals] = useState<number[]>([]);

    useEffect(() => {
        const xMin = props.viewBox.x;
        const xMax = props.viewBox.x + props.viewBox.width;
        const yMin = props.viewBox.y;
        const yMax = props.viewBox.y + props.viewBox.height;
        const tempXVals = findNumberSequenceInRange(xMin, xMax, props.gridGapSize);
        const tempYVals = findNumberSequenceInRange(yMin, yMax, props.gridGapSize);
        setXVals(tempXVals);
        setYVals(tempYVals);
    }, [props.viewBox]);

    return (
        <g>
            {xVals.map((x) => (
                <text
                    key={x}
                    x={x}
                    y={props.viewBox.height - props.viewBox.height * 0.01 + props.viewBox.y}
                    fontSize={props.gridGapSize * 0.1}
                >
                    {x}
                </text>
            ))}
            {yVals.map((y) => (
                <text
                    key={y}
                    textAnchor="end"
                    y={y}
                    x={props.viewBox.width - props.viewBox.width * 0.01 + props.viewBox.x}
                    fontSize={props.gridGapSize * 0.1}
                >
                    {y}
                </text>
            ))}
        </g>
    );
};

export default LineLabels;
