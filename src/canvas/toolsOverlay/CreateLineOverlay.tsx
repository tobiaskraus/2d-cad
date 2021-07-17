import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { create } from '../../features/shapes/shapesSlice';

import { useAppDispatch } from '../../hooks';
import { ShapeType } from '../../shapes/ShapeType';
import { ViewBox } from '../viewBox/ViewBox';

interface CreateLineOverlayProps {
    viewBox: ViewBox;
}

interface Point {
    x: number;
    y: number;
}

const CreateLineOverlay: FunctionComponent<CreateLineOverlayProps> = (props) => {
    const [startPoint, setStartPoint] = useState<Point | null>(null);
    const dispatch = useAppDispatch();

    const onMouseDown = (e: React.MouseEvent<SVGElement>) => {
        const x = e.clientX / props.viewBox.pixelsPerUnit + props.viewBox.x;
        const y = e.clientY / props.viewBox.pixelsPerUnit + props.viewBox.y;
        setStartPoint({ x, y });
    };

    const onMouseUp = (e: React.MouseEvent<SVGElement>) => {
        const x = e.clientX / props.viewBox.pixelsPerUnit + props.viewBox.x;
        const y = e.clientY / props.viewBox.pixelsPerUnit + props.viewBox.y;
        if (!startPoint) {
            throw Error('no startPoint');
        }
        dispatch(
            create({
                id: 44,
                x: startPoint.x,
                y: startPoint.y,
                fill: 'red',
                shape: {
                    type: ShapeType.LINE,
                    x2: x,
                    y2: y,
                },
            })
        );
    };

    return (
        <>
            <FullSizeOverlay
                x={props.viewBox.x}
                y={props.viewBox.y}
                width={props.viewBox.width}
                height={props.viewBox.height}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
            />
        </>
    );
};

const FullSizeOverlay = styled.rect`
    cursor: crosshair;
    fill: #0000aa66;
`;

export default CreateLineOverlay;
