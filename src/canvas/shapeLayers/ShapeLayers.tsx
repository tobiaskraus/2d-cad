import React, { FunctionComponent } from 'react';
import { useAppSelector } from '../../hooks';
import { Line } from '../../shapes/Line';

import LineShape from '../../shapes/LineShape';
import { Rect } from '../../shapes/Rect';
import RectShape from '../../shapes/RectShape';
import { ShapeObject } from '../../shapes/ShapeObject';
import { ShapeType } from '../../shapes/ShapeType';

const ShapeLayers: FunctionComponent = () => {
    const layers = useAppSelector((state) => state.shapes.layers);

    const shape = (obj: ShapeObject) => {
        switch (obj.shape.type) {
            case ShapeType.RECT:
                return <RectShape key={obj.id} {...(obj as ShapeObject<Rect>)} />;
            case ShapeType.LINE:
                return <LineShape key={obj.id} {...(obj as ShapeObject<Line>)} />;
        }
    };

    return <>{layers.map((obj) => shape(obj))}</>;
};

export default ShapeLayers;
