import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface IconProps {
    text: string;
    onClick: () => void;
    active?: boolean;
    hoverText?: string;
}
const Icon: FunctionComponent<IconProps> = (props) => (
    <IconWrapper active={props.active} title={props.hoverText} onClick={props.onClick}>
        {props.text}
    </IconWrapper>
);

const IconWrapper = styled.div<{ active?: boolean }>`
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: ${(props) => (props.active ? 'blue' : '#444')};
    cursor: ${(props) => (props.active ? 'default' : 'pointer')};
`;

export default Icon;
