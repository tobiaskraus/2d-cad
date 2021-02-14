import React from 'react';
import styled from 'styled-components';

function App() {
    return <Header>2D CAD</Header>;
}

export default App;

const Header = styled.header`
    height: 48px;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
`;
