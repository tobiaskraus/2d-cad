import React, { FunctionComponent } from 'react';

import { Point } from '../../../models/Point';
import { lineAngle } from '../../../utils/geometry/lineAngle';
import { lineCenter } from '../../../utils/geometry/lineCenter';
import { lineLength } from '../../../utils/geometry/lineLength';

interface RulerProps {
    p1: Point;
    p2: Point;
}

const Ruler: FunctionComponent<RulerProps> = (props) => {
    const { x, y } = lineCenter(props.p1, props.p2);
    return (
        <text
            x={x}
            y={y}
            fontSize={1}
            style={{
                userSelect: 'none',
                backgroundColor: 'white',
                fill: 'blue',
                transform: `rotate(${lineAngle(props.p1, props.p2)}deg) translate(0,-0.5px)`,
                transformOrigin: `${x}px ${y}px`,
            }}
            textAnchor="middle"
        >
            {lineLength(props.p1, props.p2)}
        </text>
    );
};

export default Ruler;
