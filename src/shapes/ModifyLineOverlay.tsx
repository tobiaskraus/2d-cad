import React, { FunctionComponent, useState } from 'react';

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

    const onChangeFinish = () => {
        dispatch(
            modifyShape({
                id: props.id,
                x: p1.x,
                y: p1.y,
                shape: {
                    ...props.shape,
                    x2: p2.x,
                    y2: p2.y,
                },
            })
        );
    };

    return (
        <g>
            <line
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                style={{ stroke: 'cyan', strokeWidth: props.strokeWidth * 2 }}
            />
            <Knob
                x={p1.x}
                y={p1.y}
                radius={props.strokeWidth * 4}
                viewBox={props.viewBox}
                onChange={setP1}
                onChangeFinish={onChangeFinish}
            />
            <Knob
                x={p2.x}
                y={p2.y}
                radius={props.strokeWidth * 4}
                viewBox={props.viewBox}
                onChange={setP2}
                onChangeFinish={onChangeFinish}
            />
        </g>
    );
};

export default ModifyLineOverlay;
