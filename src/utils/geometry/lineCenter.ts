import { Point } from '../../models/Point';

export function lineCenter(p1: Point, p2: Point): Point {
    return {
        x: (p1.x + p2.x) * 0.5,
        y: (p1.y + p2.y) * 0.5,
    };
}
