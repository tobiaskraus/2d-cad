import React, { FunctionComponent } from 'react';
import { SVG } from '@svgdotjs/svg.js';

interface CanvasProps {
    className?: string;
}

const draw = SVG().addTo('body').size('100vw', '100vh');

const Canvas: FunctionComponent<CanvasProps> = (props) => {
    draw.rect(200, 300).move(50, 25).fill('#f06');

    return <></>;
};

export default Canvas;
