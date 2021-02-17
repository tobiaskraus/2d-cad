import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export interface ViewBox {
    x: number;
    y: number;
    height: number;
    width: number;
}

interface ViewBoxControlProps {
    className?: string;
    value: ViewBox;
    onChange: (cb: (valOld: ViewBox) => ViewBox) => void;
}

const moveStep = 10;
const zoomFactor = 0.2;

const ViewBoxControl: FunctionComponent<ViewBoxControlProps> = (props) => {
    const moveUp = () => props.onChange((vb) => ({ ...vb, y: vb.y - moveStep }));
    const moveDown = () => props.onChange((vb) => ({ ...vb, y: vb.y + moveStep }));
    const moveLeft = () => props.onChange((vb) => ({ ...vb, x: vb.x - moveStep }));
    const moveRight = () => props.onChange((vb) => ({ ...vb, x: vb.x + moveStep }));
    const zoomIn = () =>
        props.onChange((vb) => ({
            ...vb,
            width: vb.width / (1 + zoomFactor),
            height: vb.height / (1 + zoomFactor),
        }));
    const zoomOut = () =>
        props.onChange((vb) => ({
            ...vb,
            width: vb.width * (1 + zoomFactor),
            height: vb.height * (1 + zoomFactor),
        }));

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
                <Control onClick={zoomIn}>+</Control>
                <span>Zoom</span>
                <Control onClick={zoomOut}>-</Control>
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
