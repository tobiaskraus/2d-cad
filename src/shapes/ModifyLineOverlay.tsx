import React, { FunctionComponent, useState } from 'react';

import Ruler from '../app/canvas/Ruler/Ruler';
import Knob from '../app/canvas/shapesOverlay/Knob';
import { ViewBox } from '../app/canvas/viewBox/ViewBox';
import { modifyShape } from '../features/shapes/shapesSlice';
import { useAppDispatch } from '../hooks';
import { Point } from '../models/Point';
import { Line } from './Line';
import { ShapeObject } from './ShapeObject';

type ModifyLineOverlayProps = ShapeObject<Line> & {
    viewBox: ViewBox;
    strokeWidth: number;
};

const ModifyLineOverlay: FunctionComponent<ModifyLineOverlayProps> = (props) => {
    const [p1, setP1] = useState<Point>({ x: props.x, y: props.y });
    const [p2, setP2] = useState<Point>({ x: props.shape.x2, y: props.shape.y2 });
    const dispatch = useAppDispatch();

    const onChangeP1Finish = (point: Point) => onChangeFinish({ x: point.x, y: point.y });
    const onChangeP2Finish = (point: Point) =>
        onChangeFinish({ shape: { ...props.shape, x2: point.x, y2: point.y } });

    const onChangeFinish = (data: Partial<ShapeObject<Line>>) => {
        dispatch(
            modifyShape({
                id: props.id,
                ...data,
            })
        );
    };

    return (
        <g>
            <Ruler p1={{ x: p1.x, y: p1.y }} p2={{ x: p2.x, y: p2.y }} />
            <line
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                style={{ stroke: 'blue', strokeWidth: props.strokeWidth * 2 }}
            />
            <Knob
                x={p1.x}
                y={p1.y}
                radius={props.strokeWidth * 4}
                viewBox={props.viewBox}
                onChange={setP1}
                onChangeFinish={onChangeP1Finish}
            />
            <Knob
                x={p2.x}
                y={p2.y}
                radius={props.strokeWidth * 4}
                viewBox={props.viewBox}
                onChange={setP2}
                onChangeFinish={onChangeP2Finish}
            />
        </g>
    );
};

export default ModifyLineOverlay;
