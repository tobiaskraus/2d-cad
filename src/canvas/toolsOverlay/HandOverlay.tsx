import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { Point } from '../../models/Point';
import { getCoordinates } from '../viewBox/getCoordinates';
import { ViewBox } from '../viewBox/ViewBox';

interface HandOverlayProps {
    viewBox: ViewBox;
    setViewBox: (cb: (valOld: ViewBox) => ViewBox) => void;
}

const HandOverlay: FunctionComponent<HandOverlayProps> = (props) => {
    const [grabStartPoint, setGrabStartPoint] = useState<Point | undefined>();
    const [grabStartViewBox, setGrabStartViewBox] = useState<ViewBox | undefined>();

    const onMouseDown = (e: React.MouseEvent) => {
        setGrabStartPoint(getCoordinates(e.clientX, e.clientY, props.viewBox));
        setGrabStartViewBox({ ...props.viewBox });
    };
    const onMouseUp = () => setGrabStartPoint(undefined);

    const onMouseMove = (e: React.MouseEvent) => {
        if (!grabStartPoint || !grabStartViewBox) {
            return;
        }
        const coordinates = getCoordinates(e.clientX, e.clientY, grabStartViewBox);
        props.setViewBox((vb) => ({
            ...vb,
            x: grabStartViewBox.x - (coordinates.x - grabStartPoint.x),
            y: grabStartViewBox.y - (coordinates.y - grabStartPoint.y),
        }));
    };

    return (
        <FullSizeOverlay
            x={props.viewBox.x}
            y={props.viewBox.y}
            width={props.viewBox.width}
            height={props.viewBox.height}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            isGrabbing={!!grabStartPoint}
        />
    );
};

export default HandOverlay;

const FullSizeOverlay = styled.rect<{ isGrabbing: boolean }>`
    cursor: ${(props) => (props.isGrabbing ? 'grabbing' : 'grab')};
    fill: transparent;
`;
