import React, { FunctionComponent, useState } from 'react';
import { Point } from '../../../models/Point';
import { getCoordinates } from '../viewBox/getCoordinates';
import { ViewBox } from '../viewBox/ViewBox';

interface KnobProps {
    x: number;
    y: number;
    radius: number;
    viewBox: ViewBox;
    onChange: (point: Point) => void;
    onChangeFinish: () => void;
}

const Knob: FunctionComponent<KnobProps> = (props) => {
    const [grabbing, setGrabbing] = useState(false);

    const onMouseDown = () => setGrabbing(true);

    const onMouseUp = () => {
        setGrabbing(false);
        props.onChangeFinish();
    };

    const onMouseMove = (e: React.MouseEvent<SVGElement>) => {
        if (!grabbing) {
            return;
        }
        props.onChange(getCoordinates(e.clientX, e.clientY, props.viewBox));
    };

    return (
        <circle
            {...{ onMouseDown, onMouseUp, onMouseMove }}
            r={props.radius}
            cx={props.x}
            cy={props.y}
            fill="black"
        />
    );
};

export default Knob;
