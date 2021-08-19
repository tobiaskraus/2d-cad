import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';

import { config } from '../../../config';
import { findNumberSequenceInRange } from '../../../utils/findNumberSequenceInRange';
import { ViewBox } from '../viewBox/ViewBox';

interface LineLabelsProps {
    viewBox: ViewBox;
    gridGapSizes: { small: number; big: number };
}

const LineLabels: FunctionComponent<LineLabelsProps> = (props) => {
    const [xVals, setXVals] = useState<number[]>([]);
    const [yVals, setYVals] = useState<number[]>([]);

    useEffect(() => {
        const xMin = props.viewBox.x;
        const xMax = props.viewBox.x + props.viewBox.width;
        const yMin = props.viewBox.y;
        const yMax = props.viewBox.y + props.viewBox.height;
        const tempXVals = findNumberSequenceInRange(xMin, xMax, props.gridGapSizes.big);
        const tempYVals = findNumberSequenceInRange(yMin, yMax, props.gridGapSizes.big);
        setXVals(tempXVals);
        setYVals(tempYVals);
    }, [props.viewBox, props.gridGapSizes]);

    const formatFloat = useCallback(
        (float: number) => float.toFixed(Math.max(0, Math.log10(props.gridGapSizes.small) * -1)),
        [props.gridGapSizes]
    );

    const fontSize = (props.viewBox.width + props.viewBox.height) * config.RELATIVE_TEXT_SIZE;

    return (
        <g>
            {xVals.map((x) => (
                <text
                    key={x}
                    x={x}
                    y={props.viewBox.height - props.viewBox.height * 0.01 + props.viewBox.y}
                    fontSize={fontSize}
                    style={{ userSelect: 'none' }}
                >
                    {formatFloat(x)}
                </text>
            ))}
            {yVals.map((y) => (
                <text
                    key={y}
                    textAnchor="end"
                    y={y}
                    x={props.viewBox.width - props.viewBox.width * 0.01 + props.viewBox.x}
                    fontSize={fontSize}
                    style={{ userSelect: 'none' }}
                >
                    {formatFloat(y)}
                </text>
            ))}
        </g>
    );
};

export default LineLabels;
