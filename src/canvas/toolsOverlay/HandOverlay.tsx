import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { ViewBox } from '../viewBox/ViewBox';

interface HandOverlayProps {
    viewBox: ViewBox;
    setViewBox: (cb: (valOld: ViewBox) => ViewBox) => void;
}

const HandOverlay: FunctionComponent<HandOverlayProps> = (props) => {
    const [isGrabbing, setIsGrabbing] = useState(false);

    const onMouseDown = () => setIsGrabbing(true);
    const onMouseUp = () => setIsGrabbing(false);

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isGrabbing) {
            return;
        }
        props.setViewBox((vb) => ({
            ...vb,
            x: vb.x - e.movementX / vb.pixelsPerUnit,
            y: vb.y - e.movementY / vb.pixelsPerUnit,
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
            isGrabbing={isGrabbing}
        />
    );
};

export default HandOverlay;

const FullSizeOverlay = styled.rect<{ isGrabbing: boolean }>`
    cursor: ${(props) => (props.isGrabbing ? 'grabbing' : 'grab')};
    fill: transparent;
`;
