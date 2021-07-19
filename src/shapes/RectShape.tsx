import React, { FunctionComponent } from 'react';

import { Rect } from './Rect';
import { ShapeObject } from './ShapeObject';

type RectShapeProps = ShapeObject<Rect> & { onClick?: () => void };

const RectShape: FunctionComponent<RectShapeProps> = (props) => (
    <>
        <rect
            onClick={props.onClick}
            x={props.x}
            y={props.y}
            width={props.shape.width}
            height={props.shape.height}
            style={{ fill: props.fill, strokeWidth: 0.2, stroke: 'rgb(0,0,0)' }}
        />
        {props.selected && (
            <rect
                onClick={props.onClick}
                x={props.x - 0.1}
                y={props.y - 0.1}
                width={props.shape.width + 0.2}
                height={props.shape.height + 0.2}
                style={{ fill: 'none', strokeWidth: 0.2, stroke: 'cyan' }}
            />
        )}
    </>
);

export default RectShape;
