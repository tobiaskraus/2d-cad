import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { config } from '../../../config';
import { createShape } from '../../../features/shapes/shapesSlice';
import { useAppDispatch } from '../../../hooks';
import { Point } from '../../../models/Point';
import RectShape from '../../../shapes/RectShape';
import { ShapeType } from '../../../shapes/ShapeType';
import { getCoordinates } from '../viewBox/getCoordinates';
import { ViewBox } from '../viewBox/ViewBox';

interface CreateRectOverlayProps {
    viewBox: ViewBox;
}

const CreateRectOverlay: FunctionComponent<CreateRectOverlayProps> = (props) => {
    const [startPoint, setStartPoint] = useState<Point | null>(null);
    const [tempEndPoint, setTempEndPoint] = useState<Point | null>(null);
    const dispatch = useAppDispatch();
    const strokeWidth = (props.viewBox.height + props.viewBox.width) * config.RELATIVE_STROKE_WIDTH;

    const createRect = (start: Point, end: Point) => {
        dispatch(
            createShape({
                id: new Date().getTime(),
                x: Math.min(start.x, end.x),
                y: Math.min(start.y, end.y),
                fill: config.COLORS.softPrimary,
                shape: {
                    type: ShapeType.RECT,
                    width: Math.abs(end.x - start.x),
                    height: Math.abs(end.y - start.y),
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
        createRect(startPoint, coordinates);

        setStartPoint(null);
        setTempEndPoint(null);
    };

    return (
        <>
            {tempEndPoint !== null && startPoint !== null && (
                <>
                    <RectShape
                        id={new Date().getTime()}
                        x={Math.min(startPoint.x, tempEndPoint.x)}
                        y={Math.min(startPoint.y, tempEndPoint.y)}
                        strokeWidth={strokeWidth}
                        // textSize={props.textSize}
                        fill={config.COLORS.activePrimary}
                        // viewBox={props.viewBox}
                        shape={{
                            type: ShapeType.RECT,
                            width: Math.abs(tempEndPoint.x - startPoint.x),
                            height: Math.abs(tempEndPoint.y - startPoint.y),
                        }}
                    />
                </>
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

export default CreateRectOverlay;

const FullSizeOverlay = styled.rect`
    cursor: crosshair;
    fill: transparent;
`;
