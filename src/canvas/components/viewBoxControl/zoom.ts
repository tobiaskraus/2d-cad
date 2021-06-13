import { ViewBox } from './ViewBox';

export const zoomFactor = 0.2;

export function zoomIn(vb: ViewBox) {
    return {
        ...vb,
        width: vb.width / (1 + zoomFactor),
        height: vb.height / (1 + zoomFactor),
    };
}

export function zoomOut(vb: ViewBox) {
    return {
        ...vb,
        width: vb.width * (1 + zoomFactor),
        height: vb.height * (1 + zoomFactor),
    };
}
