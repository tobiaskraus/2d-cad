import { ViewBox } from './ViewBox';

const ZOOM_SPEED = 0.001;
const MAX_ZOOM_OUT_FACTOR = 0.9; // factor above 1.0 can break the code

/**
 * @param vb current viewBox
 * @param deltaY positive value: zoom out / negative value: zoom in. Value scale based WheelEvent.deltaY
 * @returns new viewBox
 */
export function zoom(vb: ViewBox, deltaY: number) {
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
    return {
        x: vb.x + (vb.width - width) * 0.5,
        y: vb.y + (vb.height - height) * 0.5,
        width,
        height,
        pixelsPerUnit,
    };
}
