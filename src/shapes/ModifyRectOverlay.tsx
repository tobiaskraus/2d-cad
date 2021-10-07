import React, { FunctionComponent, useState } from 'react';
import { ViewBox } from '../app/canvas/viewBox/ViewBox';
import { modifyShape } from '../features/shapes/shapesSlice';
import { useAppDispatch } from '../hooks';
import { Point } from '../models/Point';
import { useDrag } from '../utils/useDrag';
import { Rect } from './Rect';
import { ShapeObject } from './ShapeObject';

type ModifyRectOverlayProps = ShapeObject<Rect> & {
    viewBox: ViewBox;
    strokeWidth: number;
    textSize: number;
};

const ModifyRectOverlay: FunctionComponent<ModifyRectOverlayProps> = (props) => {
    const [point, setPoint] = useState<Point>({ x: props.x, y: props.y });
    const dispatch = useAppDispatch();

    const onChangeFinish = (p: Point) => {
        dispatch(
            modifyShape({
                id: props.id,
                x: p.x,
                y: p.y,
            })
        );
    };

    const { onMouseDown } = useDrag(props.viewBox, setPoint, onChangeFinish);

    return (
        <rect
            x={point.x - 0.1}
            y={point.y - 0.1}
            width={props.shape.width + 0.2}
            height={props.shape.height + 0.2}
            style={{ fill: props.fill, strokeWidth: props.strokeWidth, stroke: 'blue' }}
            onMouseDown={onMouseDown}
        />
    );
};

export default ModifyRectOverlay;
