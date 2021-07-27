import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';

import { zoom } from './zoom';
import { ViewBox } from './ViewBox';

const SCROLL_MOVE_SPEED = 0.1;

interface ViewBoxControlProps {
    onChange: (cb: (valOld: ViewBox) => ViewBox) => void;
}

const moveStep = 10;

const ViewBoxControl: FunctionComponent<ViewBoxControlProps> = (props) => {
    const { onChange } = props;
    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            if (e.ctrlKey) {
                onChange((vb) => zoom(vb, e.deltaY));
            } else {
                onChange((vb) => ({
                    ...vb,
                    x: vb.x + e.deltaX * SCROLL_MOVE_SPEED,
                    y: vb.y + e.deltaY * SCROLL_MOVE_SPEED,
                }));
            }
        };
        window.addEventListener('wheel', onWheel);
        return () => {
            window.removeEventListener('wheel', onWheel);
        };
    }, [onChange]);

    const moveUp = () => onChange((vb) => ({ ...vb, y: vb.y - moveStep }));
    const moveDown = () => onChange((vb) => ({ ...vb, y: vb.y + moveStep }));
    const moveLeft = () => onChange((vb) => ({ ...vb, x: vb.x - moveStep }));
    const moveRight = () => onChange((vb) => ({ ...vb, x: vb.x + moveStep }));
    const onZoomIn = () => onChange((vb) => zoom(vb, -200));
    const onZoomOut = () => onChange((vb) => zoom(vb, 200));

    return (
        <Wrapper>
            <Move>
                <span />
                <Control onClick={moveUp}>▲</Control>
                <span />

                <Control onClick={moveLeft}>◄</Control>
                <span />
                <Control onClick={moveRight}>►</Control>

                <span />
                <Control onClick={moveDown}>▼</Control>
                <span />
            </Move>
            <Zoom>
                <Control onClick={onZoomIn}>+</Control>
                <span>Zoom</span>
                <Control onClick={onZoomOut}>-</Control>
            </Zoom>
        </Wrapper>
    );
};

export default ViewBoxControl;

const Wrapper = styled.div`
    position: absolute;
    z-index: 10;
    right: 3vw;
    bottom: 3vh;
    width: 120px;
`;

const Move = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    text-align: center;
`;

const Zoom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Control = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
`;
