import React, { FunctionComponent, useEffect } from 'react';
import { SVG } from '@svgdotjs/svg.js';

interface CanvasProps {
    className?: string;
}

const draw = SVG().addTo('body').size('100vw', '100vh').id('canvas');

const Canvas: FunctionComponent<CanvasProps> = (props) => {
    draw.rect(200, 300).move(50, 25).fill('#f06');

    useEffect(() => {
        draw.node.addEventListener('click', onCanvasClick);
        return () => {
            draw.node.removeEventListener('click', onCanvasClick);
        };
    }, []);

    return <></>;
};

export default Canvas;

const onCanvasClick = (ev: MouseEvent) => {
    console.log('clicked in ', draw.node, ' in position', ev.offsetX, ev.offsetY);
};
