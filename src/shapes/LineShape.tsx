import React, { FunctionComponent } from 'react';

import { Line } from './Line';
import { ShapeObject } from './ShapeObject';

const LineShape: FunctionComponent<ShapeObject<Line>> = (props) => (
    <line
        x1={props.x}
        y1={props.y}
        x2={props.shape.x2}
        y2={props.shape.y2}
        style={{ stroke: props.fill, strokeWidth: 0.2 }}
    />
);

export default LineShape;
