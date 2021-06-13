import { ViewBox } from './ViewBox';

/** should be a positive number above 1 */
export const zoomFactor = 1.2;

export function zoomIn(vb: ViewBox): ViewBox {
    const width = vb.width / zoomFactor;
    const height = vb.height / zoomFactor;
    return {
        x: vb.x + (vb.width - width) * 0.5,
        y: vb.y + (vb.height - height) * 0.5,
        width,
        height,
        pixelsPerUnit: vb.pixelsPerUnit / zoomFactor,
    };
}

export function zoomOut(vb: ViewBox) {
    const width = vb.width * zoomFactor;
    const height = vb.height * zoomFactor;
    return {
        x: vb.x + (vb.width - width) * 0.5,
        y: vb.y + (vb.height - height) * 0.5,
        width: vb.width * zoomFactor,
        height: vb.height * zoomFactor,
        pixelsPerUnit: vb.pixelsPerUnit * zoomFactor,
    };
}
