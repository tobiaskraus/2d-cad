import { Rect } from '../shapes/Rect';
import { ShapeObject } from '../shapes/ShapeObject';
import { ShapeType } from '../shapes/ShapeType';

export const shapesStore: ShapeObject[] = [
    {
        id: 1,
        x: 20,
        y: 30,
        fill: 'red',
        shape: {
            type: ShapeType.RECT,
            width: 5,
            height: 4,
        } as Rect,
    },
    {
        id: 11,
        x: 0,
        y: 50,
        fill: 'purple',
        shape: {
            type: ShapeType.LINE,
            x2: 60,
            y2: 70,
        },
    },
    {
        id: 21,
        x: 10,
        y: 20,
        fill: 'blue',
        shape: {
            type: ShapeType.RECT,
            width: 10,
            height: 20,
        } as Rect,
    },
];
