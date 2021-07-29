import React, { FunctionComponent, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { zoom } from './zoom';
import { ViewBox } from './ViewBox';
import { getCoordinates } from './getCoordinates';
import { config } from '../../../config';

interface ViewBoxControlProps {
    viewBox: ViewBox;
    onChange: (cb: (valOld: ViewBox) => ViewBox) => void;
}

const ViewBoxControl: FunctionComponent<ViewBoxControlProps> = (props) => {
    const { onChange } = props;

    const moveUp = useCallback(
        () => onChange((vb) => ({ ...vb, y: vb.y - config.MOVE_STEP_FACTOR * vb.height })),
        [onChange]
    );
    const moveDown = useCallback(
        () => onChange((vb) => ({ ...vb, y: vb.y + config.MOVE_STEP_FACTOR * vb.height })),
        [onChange]
    );
    const moveLeft = useCallback(
        () => onChange((vb) => ({ ...vb, x: vb.x - config.MOVE_STEP_FACTOR * vb.width })),
        [onChange]
    );
    const moveRight = useCallback(
        () => onChange((vb) => ({ ...vb, x: vb.x + config.MOVE_STEP_FACTOR * vb.width })),
        [onChange]
    );
    const onZoomIn = () => onChange((vb) => zoom(vb, -200));
    const onZoomOut = () => onChange((vb) => zoom(vb, 200));

    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            if (e.ctrlKey) {
                const centerPoint = getCoordinates(e.clientX, e.clientY, props.viewBox);
                onChange((vb) => zoom(vb, e.deltaY, centerPoint));
            } else {
                onChange((vb) => ({
                    ...vb,
                    x: vb.x + e.deltaX * config.SCROLL_MOVE_SPEED * vb.width,
                    y: vb.y + e.deltaY * config.SCROLL_MOVE_SPEED * vb.width,
                }));
            }
        };

        const onKeydown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowUp':
                    moveUp();
                    break;
                case 'ArrowDown':
                    moveDown();
                    break;
                case 'ArrowLeft':
                    moveLeft();
                    break;
                case 'ArrowRight':
                    moveRight();
                    break;
            }
        };

        window.addEventListener('wheel', onWheel);
        window.addEventListener('keydown', onKeydown);

        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('keydown', onKeydown);
        };
    }, [onChange, props.viewBox, moveUp, moveDown, moveLeft, moveRight]);

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
