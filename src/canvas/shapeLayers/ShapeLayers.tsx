import React, { FunctionComponent } from 'react';
import { selectShape } from '../../features/shapes/shapesSlice';
import { Tool } from '../../features/tools/toolsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Line } from '../../shapes/Line';

import LineShape from '../../shapes/LineShape';
import { Rect } from '../../shapes/Rect';
import RectShape from '../../shapes/RectShape';
import { ShapeObject } from '../../shapes/ShapeObject';
import { ShapeType } from '../../shapes/ShapeType';

const ShapeLayers: FunctionComponent = () => {
    const layers = useAppSelector((state) => state.shapes.layers);
    const activeTool = useAppSelector((state) => state.tools.activeTool);
    const dispatch = useAppDispatch();

    const onShapeClick = (id: number) => {
        if (activeTool === Tool.SELECT) {
            dispatch(selectShape({ ids: [id] }));
        }
    };

    const shape = (obj: ShapeObject) => {
        switch (obj.shape.type) {
            case ShapeType.RECT:
                return (
                    <RectShape
                        onClick={() => onShapeClick(obj.id)}
                        key={obj.id}
                        {...(obj as ShapeObject<Rect>)}
                    />
                );
            case ShapeType.LINE:
                return (
                    <LineShape
                        onClick={() => onShapeClick(obj.id)}
                        key={obj.id}
                        {...(obj as ShapeObject<Line>)}
                    />
                );
        }
    };

    return <>{layers.map((obj) => shape(obj))}</>;
};

export default ShapeLayers;
