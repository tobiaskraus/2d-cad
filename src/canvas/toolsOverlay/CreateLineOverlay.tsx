import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { create } from '../../features/shapes/shapesSlice';

import { useAppDispatch } from '../../hooks';
import { ShapeType } from '../../shapes/ShapeType';
import { getCoordinates } from '../viewBox/getCoordinates';
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
        setStartPoint(getCoordinates(e.clientX, e.clientY, props.viewBox));
    };

    const onMouseUp = (e: React.MouseEvent<SVGElement>) => {
        if (!startPoint) {
            throw Error('no startPoint');
        }
        const coordinates = getCoordinates(e.clientX, e.clientY, props.viewBox);
        dispatch(
            create({
                id: 44,
                x: startPoint.x,
                y: startPoint.y,
                fill: 'red',
                shape: {
                    type: ShapeType.LINE,
                    x2: coordinates.x,
                    y2: coordinates.y,
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
