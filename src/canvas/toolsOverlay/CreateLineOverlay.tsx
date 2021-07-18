import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { create } from '../../features/shapes/shapesSlice';

import { useAppDispatch } from '../../hooks';
import LineShape from '../../shapes/LineShape';
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
    const [tempEndPoint, setTempEndPoint] = useState<Point | null>(null);
    const dispatch = useAppDispatch();

    const createShape = (start: Point, end: Point) => {
        dispatch(
            create({
                id: new Date().getTime(),
                x: start.x,
                y: start.y,
                fill: 'red',
                shape: {
                    type: ShapeType.LINE,
                    x2: end.x,
                    y2: end.y,
                },
            })
        );
    };

    const onMouseDown = (e: React.MouseEvent<SVGElement>) => {
        setStartPoint(getCoordinates(e.clientX, e.clientY, props.viewBox));
    };

    const onMouseMove = (e: React.MouseEvent<SVGElement>) => {
        if (!startPoint) {
            return;
        }
        setTempEndPoint(getCoordinates(e.clientX, e.clientY, props.viewBox));
    };

    const onMouseUp = (e: React.MouseEvent<SVGElement>) => {
        if (!startPoint) {
            throw Error('no startPoint');
        }
        const coordinates = getCoordinates(e.clientX, e.clientY, props.viewBox);
        createShape(startPoint, coordinates);

        setStartPoint(null);
        setTempEndPoint(null);
    };

    return (
        <>
            {tempEndPoint !== null && startPoint !== null && (
                <LineShape
                    id={new Date().getTime()}
                    x={startPoint.x}
                    y={startPoint.y}
                    fill="red"
                    shape={{
                        type: ShapeType.LINE,
                        x2: tempEndPoint.x,
                        y2: tempEndPoint.y,
                    }}
                />
            )}
            <FullSizeOverlay
                x={props.viewBox.x}
                y={props.viewBox.y}
                width={props.viewBox.width}
                height={props.viewBox.height}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
            />
        </>
    );
};

export default CreateLineOverlay;

const FullSizeOverlay = styled.rect`
    cursor: crosshair;
    fill: transparent;
`;
