import React, { FunctionComponent } from 'react';
import { Line } from '../../shapes/Line';

import LineShape from '../../shapes/LineShape';
import { Rect } from '../../shapes/Rect';
import RectShape from '../../shapes/RectShape';
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
            case ShapeType.LINE:
                return <LineShape key={obj.id} {...(obj as ShapeObject<Line>)} />;
        }
    };

    return <>{props.shapes.map((obj) => shape(obj))}</>;
};

export default ShapeLayers;
