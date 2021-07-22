import React, { FunctionComponent } from 'react';

import { Line } from './Line';
import { ShapeObject } from './ShapeObject';

type LineShapeProps = ShapeObject<Line> & { onClick?: () => void };

const LineShape: FunctionComponent<LineShapeProps> = (props) => (
    <>
        {props.selected && (
            <line
                onClick={props.onClick}
                x1={props.x}
                y1={props.y}
                x2={props.shape.x2}
                y2={props.shape.y2}
                style={{ stroke: 'cyan', strokeWidth: 0.4 }}
            />
        )}
        <line
            x1={props.x}
            y1={props.y}
            x2={props.shape.x2}
            y2={props.shape.y2}
            style={{ stroke: props.fill, strokeWidth: 0.2 }}
        />
        {/* Click wrapper */}
        <line
            stroke="transparent"
            onClick={props.onClick}
            strokeWidth={1}
            x1={props.x}
            y1={props.y}
            x2={props.shape.x2}
            y2={props.shape.y2}
        />
    </>
);

export default LineShape;
