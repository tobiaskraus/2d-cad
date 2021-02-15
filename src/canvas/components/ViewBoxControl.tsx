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

const ViewBoxControl: FunctionComponent<ViewBoxControlProps> = (props) => {
    const moveUp = () => props.onChange((vb) => ({ ...vb, y: vb.y - moveStep }));
    const moveDown = () => props.onChange((vb) => ({ ...vb, y: vb.y + moveStep }));
    const moveLeft = () => props.onChange((vb) => ({ ...vb, x: vb.x - moveStep }));
    const moveRight = () => props.onChange((vb) => ({ ...vb, x: vb.x + moveStep }));

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
                <Control>+</Control>
                <Control>100%</Control>
                <Control>-</Control>
            </Zoom>
        </Wrapper>
    );
};

export default ViewBoxControl;

const Wrapper = styled.div`
    position: absolute;
    z-index: 10;
    right: 10px;
    bottom: 10px;
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
