import { ShapeType } from './ShapeType';

export interface Rect {
    type: ShapeType.RECT;
    height: number;
    width: number;
}
