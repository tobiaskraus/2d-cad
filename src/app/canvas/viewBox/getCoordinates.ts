import { ViewBox } from './ViewBox';

/**
 * @param svgX screen x position relative to visible svg
 * @param svgY screen y position relative to visible svg
 */
export function getCoordinates(svgX: number, svgY: number, viewBox: ViewBox) {
    return {
        x: svgX / viewBox.pixelsPerUnit + viewBox.x,
        y: svgY / viewBox.pixelsPerUnit + viewBox.y,
    };
}
