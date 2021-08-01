import { Point } from '../../models/Point';

/** Calculates the angle of a line, in degrees */
export function lineAngle(p1: Point, p2: Point): number {
    return (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
}
