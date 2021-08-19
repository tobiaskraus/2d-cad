import React, { FunctionComponent } from 'react';

import { config } from '../../../config';
import { Point } from '../../../models/Point';
import { lineAngle } from '../../../utils/geometry/lineAngle';
import { lineCenter } from '../../../utils/geometry/lineCenter';
import { lineLength } from '../../../utils/geometry/lineLength';
import { prettyFloat } from '../../../utils/prettyFloat';

interface RulerProps {
    p1: Point;
    p2: Point;
    textColor: string;
    textSize: number;
}

const Ruler: FunctionComponent<RulerProps> = (props) => {
    const { x, y } = lineCenter(props.p1, props.p2);
    return (
        <text
            x={x}
            y={y}
            fontSize={props.textSize}
            style={{
                userSelect: 'none',
                backgroundColor: 'white',
                fill: props.textColor,
                transform: `rotate(${lineAngle(props.p1, props.p2)}deg) translate(0,-${
                    props.textSize * 0.5
                }px)`,
                transformOrigin: `${x}px ${y}px`,
            }}
            textAnchor="middle"
        >
            {prettyFloat(
                lineLength(props.p1, props.p2),
                props.textSize / config.RELATIVE_TEXT_SIZE
            )}
        </text>
    );
};

export default Ruler;
