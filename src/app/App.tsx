import React from 'react';
import styled from 'styled-components';

import { useKeybindings } from '../features/tools/useKeybindings';
import Canvas from './canvas/Canvas';
import Toolbar from './toolbar/Toolbar';

function App() {
    useKeybindings();

    return (
        <>
            <Header>2D CAD</Header>
            <Toolbar />
            <Canvas />
        </>
    );
}

export default App;

const Header = styled.header`
    height: 48px;
    background-color: white;
    box-shadow: 0 8px 16px 0 rgb(0 0 0 / 12%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    position: absolute;
    z-index: 10;
    top: 10px;
    left: 30px;
    width: calc(100% - 60px);
`;
