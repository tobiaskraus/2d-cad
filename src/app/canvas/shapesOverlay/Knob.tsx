import React, { FunctionComponent } from 'react';
import { Point } from '../../../models/Point';
import { useDrag } from '../../../utils/useDrag';
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
    const { viewBox, onChange, onChangeFinish } = props;
    const { onMouseDown } = useDrag(viewBox, onChange, onChangeFinish);

    return <circle {...{ onMouseDown }} r={props.radius} cx={props.x} cy={props.y} fill="black" />;
};

export default Knob;
