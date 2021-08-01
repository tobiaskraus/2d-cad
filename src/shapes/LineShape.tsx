import React, { FunctionComponent } from 'react';
import Ruler from '../app/canvas/Ruler/Ruler';

import { Line } from './Line';
import { ShapeObject } from './ShapeObject';

type LineShapeProps = ShapeObject<Line> & { onClick?: () => void; strokeWidth: number };

const LineShape: FunctionComponent<LineShapeProps> = (props) => (
    <>
        {props.selected && (
            <line
                onClick={props.onClick}
                x1={props.x}
                y1={props.y}
                x2={props.shape.x2}
                y2={props.shape.y2}
                style={{ stroke: 'cyan', strokeWidth: props.strokeWidth * 2 }}
            />
        )}
        <Ruler p1={{ x: props.x, y: props.y }} p2={{ x: props.shape.x2, y: props.shape.y2 }} />
        <line
            x1={props.x}
            y1={props.y}
            x2={props.shape.x2}
            y2={props.shape.y2}
            style={{ stroke: props.fill, strokeWidth: props.strokeWidth }}
        />
        {/* Click wrapper */}
        <line
            stroke="transparent"
            onClick={props.onClick}
            strokeWidth={props.strokeWidth * 10}
            x1={props.x}
            y1={props.y}
            x2={props.shape.x2}
            y2={props.shape.y2}
        />
    </>
);

export default LineShape;
