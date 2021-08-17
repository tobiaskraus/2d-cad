import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { config } from '../../../config';
import { selectShape } from '../../../features/shapes/shapesSlice';
import { Tool } from '../../../features/tools/toolsSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Line } from '../../../shapes/Line';
import LineShape from '../../../shapes/LineShape';
import { Rect } from '../../../shapes/Rect';
import RectShape from '../../../shapes/RectShape';
import { ShapeObject } from '../../../shapes/ShapeObject';
import { ShapeType } from '../../../shapes/ShapeType';
import { ViewBox } from '../viewBox/ViewBox';

interface ShapeLayersProps {
    viewBox: ViewBox;
}

const ShapeLayers: FunctionComponent<ShapeLayersProps> = (props) => {
    const layers = useAppSelector((state) => state.shapes.layers);
    const activeTool = useAppSelector((state) => state.tools.activeTool);
    const dispatch = useAppDispatch();
    const strokeWidth = (props.viewBox.height + props.viewBox.width) * config.RELATIVE_STROKE_WIDTH;

    const onShapeClick = (id: number) => {
        if (activeTool === Tool.SELECT) {
            dispatch(selectShape({ ids: [id] }));
        }
    };

    const onBackgroundClick = () => {
        if (activeTool === Tool.SELECT) {
            // deselect
            dispatch(selectShape({ ids: [] }));
        }
    };

    const shape = (obj: ShapeObject) => {
        switch (obj.shape.type) {
            case ShapeType.RECT:
                return (
                    <RectShape
                        onClick={() => onShapeClick(obj.id)}
                        strokeWidth={strokeWidth}
                        key={obj.id}
                        {...(obj as ShapeObject<Rect>)}
                    />
                );
            case ShapeType.LINE:
                return (
                    <LineShape
                        onClick={() => onShapeClick(obj.id)}
                        viewBox={props.viewBox}
                        strokeWidth={strokeWidth}
                        key={obj.id}
                        {...(obj as ShapeObject<Line>)}
                    />
                );
        }
    };

    return (
        <>
            <BackgroundLayer
                onClick={onBackgroundClick}
                x={props.viewBox.x}
                y={props.viewBox.y}
                height={props.viewBox.height}
                width={props.viewBox.width}
            />
            {layers.map((obj) => shape(obj))}
        </>
    );
};

export default ShapeLayers;

const BackgroundLayer = styled.rect`
    fill: transparent;
`;
