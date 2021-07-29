import { Point } from '../../../models/Point';
import { ViewBox } from './ViewBox';

const ZOOM_SPEED = 0.001;
const MAX_ZOOM_OUT_FACTOR = 0.9; // factor above 1.0 can break the code

/**
 * @param vb current viewBox
 * @param deltaY positive value: zoom out / negative value: zoom in. Value scale based WheelEvent.deltaY
 * @returns new viewBox
 */
export function zoom(vb: ViewBox, deltaY: number, centerPoint?: Point) {
    let zoomFactor = deltaY * ZOOM_SPEED;

    let pixelsPerUnit: number;
    if (zoomFactor < 0) {
        // zoom in
        pixelsPerUnit = vb.pixelsPerUnit / (1 + zoomFactor);
    } else {
        // zoom out
        pixelsPerUnit =
            vb.pixelsPerUnit - vb.pixelsPerUnit * Math.min(zoomFactor, MAX_ZOOM_OUT_FACTOR);
    }

    const factor = vb.pixelsPerUnit / pixelsPerUnit;
    const width = vb.width * factor;
    const height = vb.height * factor;

    // normed values for x & y in range [0, 1] relative to whole viewBox
    const relativeCenterPoint: Point = centerPoint
        ? getRelativeCursorPoint(centerPoint, vb)
        : { x: 0.5, y: 0.5 };

    const offsetX = (vb.width - width) * relativeCenterPoint.x;
    const offsetY = (vb.height - height) * relativeCenterPoint.y;
    return {
        x: vb.x + offsetX,
        y: vb.y + offsetY,
        width,
        height,
        pixelsPerUnit,
    };
}

export function getRelativeCursorPoint(p: Point, vb: ViewBox): Point {
    return {
        x: (p.x - vb.x) / vb.width,
        y: (p.y - vb.y) / vb.height,
    };
}
