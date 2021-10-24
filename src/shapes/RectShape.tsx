import React, { FunctionComponent } from 'react';
import Ruler from '../app/canvas/Ruler/Ruler';
import { ViewBox } from '../app/canvas/viewBox/ViewBox';
import { config } from '../config';
import { Point } from '../models/Point';
import ModifyRectOverlay from './ModifyRectOverlay';

import { Rect } from './Rect';
import { ShapeObject } from './ShapeObject';

type RectShapeProps = ShapeObject<Rect> & {
    strokeWidth: number;
    textSize: number;
    viewBox: ViewBox;
    onClick?: () => void;
};

const RectShape: FunctionComponent<RectShapeProps> = (props) => (
    <>
        {!props.selected && (
            <>
                <EdgeLabels {...props} />
                <rect
                    className="rect-shape"
                    onClick={props.onClick}
                    x={props.x}
                    y={props.y}
                    width={props.shape.width}
                    height={props.shape.height}
                    style={{
                        fill: props.fill,
                        strokeWidth: props.strokeWidth,
                        stroke: 'rgb(0,0,0)',
                    }}
                />
            </>
        )}

        {props.selected && <ModifyRectOverlay {...props} />}
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
