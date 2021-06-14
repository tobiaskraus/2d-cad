import { ShapeType } from './ShapeType';

export interface Line {
    type: ShapeType.LINE;
    x2: number;
    y2: number;
}
