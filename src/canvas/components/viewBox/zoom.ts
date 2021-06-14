import { ViewBox } from './ViewBox';

/** should be a positive number above 1 */
export const zoomFactor = 1.2;

export function zoomIn(vb: ViewBox): ViewBox {
    return zoom(vb, 1 / zoomFactor);
}

export function zoomOut(vb: ViewBox) {
    return zoom(vb, zoomFactor);
}

/**
 * @param reverseZoomFactor 0-1: zoomIn / more than 1: zoomOut
 */
function zoom(vb: ViewBox, reverseZoomFactor: number) {
    const width = vb.width * reverseZoomFactor;
    const height = vb.height * reverseZoomFactor;
    return {
        x: vb.x + (vb.width - width) * 0.5,
        y: vb.y + (vb.height - height) * 0.5,
        width: vb.width * reverseZoomFactor,
        height: vb.height * reverseZoomFactor,
        pixelsPerUnit: vb.pixelsPerUnit * reverseZoomFactor,
    };
}
