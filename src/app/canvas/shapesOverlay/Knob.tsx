import React, { FunctionComponent, useEffect, useRef } from 'react';
import { Point } from '../../../models/Point';
import { getCoordinates } from '../viewBox/getCoordinates';
import { ViewBox } from '../viewBox/ViewBox';

interface KnobProps {
    x: number;
    y: number;
    radius: number;
    viewBox: ViewBox;
    onChange: (point: Point) => void;
    onChangeFinish: (point: Point) => void;
}

const Knob: FunctionComponent<KnobProps> = (props) => {
    const grabbing = useRef(false);
    const { viewBox, onChange, onChangeFinish } = props;

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            if (!grabbing.current) {
                return;
            }
            onChange(getCoordinates(e.clientX, e.clientY, viewBox));
        };
        const onMouseUp = (e: MouseEvent) => {
            if (grabbing.current) {
                grabbing.current = false;
                onChangeFinish(getCoordinates(e.clientX, e.clientY, viewBox));
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
        // adding onChange or onChangeFinish to depency array causes huge performance issues
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [viewBox]);

    const onMouseDown = () => (grabbing.current = true);

    return <circle {...{ onMouseDown }} r={props.radius} cx={props.x} cy={props.y} fill="black" />;
};

export default Knob;
