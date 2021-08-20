import React, { FunctionComponent } from 'react';
import Ruler from '../app/canvas/Ruler/Ruler';
import { config } from '../config';
import { Point } from '../models/Point';

import { Rect } from './Rect';
import { ShapeObject } from './ShapeObject';

type RectShapeProps = ShapeObject<Rect> & {
    onClick?: () => void;
    strokeWidth: number;
    textSize: number;
};

const RectShape: FunctionComponent<RectShapeProps> = (props) => (
    <>
        <EdgeLabels {...props} />
        <rect
            onClick={props.onClick}
            x={props.x}
            y={props.y}
            width={props.shape.width}
            height={props.shape.height}
            style={{ fill: props.fill, strokeWidth: props.strokeWidth, stroke: 'rgb(0,0,0)' }}
        />
        {props.selected && (
            <rect
                onClick={props.onClick}
                x={props.x - 0.1}
                y={props.y - 0.1}
                width={props.shape.width + 0.2}
                height={props.shape.height + 0.2}
                style={{ fill: 'none', strokeWidth: props.strokeWidth, stroke: 'cyan' }}
            />
        )}
    </>
);

export default RectShape;

const EdgeLabels: FunctionComponent<RectShapeProps> = ({ x, y, shape, textSize }) => {
    const pTopLeft: Point = { x, y };
    const pTopRight: Point = { x: x + shape.width, y };
    const pBottomRight: Point = { x: x + shape.width, y: y + shape.height };

    const rulerStyles = {
        textSize,
        textColor: config.COLORS.softPrimary,
    };

    return (
        <>
            <Ruler p1={pTopRight} p2={pBottomRight} {...rulerStyles} />
            <Ruler p1={pTopLeft} p2={pTopRight} {...rulerStyles} />
        </>
    );
};
