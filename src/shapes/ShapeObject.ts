import { Line } from './Line';
import { Rect } from './Rect';

type Shapes = Rect | Line;

export interface ShapeObject<T extends Shapes = Shapes> {
    id: number;
    x: number;
    y: number;
    shape: T;
    fill?: string;
}
