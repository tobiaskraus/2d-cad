import { ViewBox } from './ViewBox';

/**
 * @param vb current viewBox
 * @param deltaY positive value: zoom out / negative value: zoom in. Value scale based WheelEvent.deltaY
 * @returns new viewBox
 */
export function zoom(vb: ViewBox, deltaY: number) {
    let pixelsPerUnit = vb.pixelsPerUnit - deltaY * 0.001 * vb.pixelsPerUnit;

    // if deltaY is so high that pixelsPerUnit are about to become 0 (or even become negative) ...
    if (pixelsPerUnit <= 0.1 * vb.pixelsPerUnit) {
        pixelsPerUnit = 0.1 * vb.pixelsPerUnit;
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
