import React, { FunctionComponent } from 'react';

import { Rect } from './Rect';
import { ShapeObject } from './ShapeObject';

const RectShape: FunctionComponent<ShapeObject<Rect>> = (props) => (
    <rect
        x={props.x}
        y={props.y}
        width={props.shape.width}
        height={props.shape.height}
        style={{ fill: props.fill, strokeWidth: 0.2, stroke: 'rgb(0,0,0)' }}
    />
);

export default RectShape;
