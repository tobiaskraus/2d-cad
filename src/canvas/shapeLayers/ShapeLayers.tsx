import React, { FunctionComponent } from 'react';
import { Rect } from '../../shapes/Rect';
import { ShapeObject } from '../../shapes/ShapeObject';
import { ShapeType } from '../../shapes/ShapeType';

interface ShapeLayersProps {
    shapes: ShapeObject[];
}

const ShapeLayers: FunctionComponent<ShapeLayersProps> = (props) => {
    const shape = (obj: ShapeObject) => {
        switch (obj.shape.type) {
            case ShapeType.RECT:
                return <RectShape key={obj.id} {...(obj as ShapeObject<Rect>)} />;
        }
    };

    return <>{props.shapes.map((obj) => shape(obj))}</>;
};

export default ShapeLayers;

const RectShape: FunctionComponent<ShapeObject<Rect>> = (props) => (
    <rect
        x={props.x}
        y={props.y}
        width={props.shape.width}
        height={props.shape.height}
        style={{ fill: props.fill, strokeWidth: 0.2, stroke: 'rgb(0,0,0)' }}
    />
);
