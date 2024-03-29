import { getRelativeCursorPoint, zoom } from './zoom';
import { ViewBox } from './ViewBox';
import { Point } from '../../../models/Point';

const vb: ViewBox = {
    x: 0,
    y: 0,
    width: 10,
    height: 6,
    pixelsPerUnit: 1,
};

describe('getRelativeCursorPoint', () => {
    it('top left should be x: 0, y: 0', () => {
        expect(getRelativeCursorPoint({ x: 0, y: 0 }, vb)).toEqual({ x: 0, y: 0 });
    });

    it('bottom right should be x: 1, y: 1', () => {
        expect(getRelativeCursorPoint({ x: 10, y: 6 }, vb)).toEqual({ x: 1, y: 1 });
    });

    it('center should be x: 0.5, y: 0.5', () => {
        expect(getRelativeCursorPoint({ x: 5, y: 3 }, vb)).toEqual({ x: 0.5, y: 0.5 });
    });
});

describe('zoom', () => {
    it('positive deltaY -> zoom out', () => {
        expect(zoom(vb, 0.5).pixelsPerUnit).toBeLessThan(vb.pixelsPerUnit);
    });

    it('negative deltaY -> zoom in', () => {
        expect(zoom(vb, -1.5).pixelsPerUnit).toBeGreaterThan(vb.pixelsPerUnit);
    });

    const zoomIn = (vb: ViewBox) => zoom(vb, -200);
    const zoomOut = (vb: ViewBox) => zoom(vb, 200);

    it('zoomIn: width & height reduces', () => {
        const vb2 = zoomIn(vb);

        expect(vb2.width).toBeLessThan(vb.width);
        expect(vb2.height).toBeLessThan(vb.height);
    });

    it('zoomOut: width & height increases', () => {
        const vb2 = zoomOut(vb);

        expect(vb2.width).toBeGreaterThan(vb.width);
        expect(vb2.height).toBeGreaterThan(vb.height);
    });

    it('zoomIn: pixelsPerUnit increases', () => {
        const vb2 = zoomIn(vb);

        expect(vb2.pixelsPerUnit).toBeGreaterThan(vb.pixelsPerUnit);
    });

    it('zoomIn then zoomOut: same ViewBox expected', () => {
        const vb2 = zoomIn(vb);
        const vb3 = zoomOut(vb2);

        expect(vb3.width).toBeCloseTo(vb.width);
        expect(vb3.height).toBeCloseTo(vb.height);
    });

    it('zoomOut then zoomIn: same ViewBox expected', () => {
        const vb2 = zoomOut(vb);
        const vb3 = zoomIn(vb2);

        expect(vb3.width).toBeCloseTo(vb.width);
        expect(vb3.height).toBeCloseTo(vb.height);
    });

    it('zoomIn: center should be pivot', () => {
        const vb2 = zoomIn(vb);

        expect(getCenterX(vb2)).toEqual(getCenterX(vb));
        expect(getCenterY(vb2)).toEqual(getCenterY(vb));
    });

    it('zoomOut: center should be pivot', () => {
        const vb2 = zoomOut(vb);

        expect(getCenterX(vb2)).toEqual(getCenterX(vb));
        expect(getCenterY(vb2)).toEqual(getCenterY(vb));
    });

    it('zoomOut: extreme value (deltaY > 10000) should return valid viewBox', () => {
        const vb2 = zoom(vb, 10000);

        expect(vb2.pixelsPerUnit).toBeLessThan(vb.pixelsPerUnit);
        expect(vb2.pixelsPerUnit).toBeGreaterThan(0);
    });

    it('zoomOut: cursor Position should be fixed', () => {
        const cursorPoint: Point = { x: 2, y: 4 };
        const vb2 = zoom(vb, 200, cursorPoint);

        const relativeCursorPoint = {
            before: getRelativeCursorPoint(cursorPoint, vb),
            after: getRelativeCursorPoint(cursorPoint, vb2),
        };
        expect(relativeCursorPoint.before).toEqual(relativeCursorPoint.after);
    });
});

const getCenterX = (vb: ViewBox) => vb.x + vb.width * 0.5;
const getCenterY = (vb: ViewBox) => vb.y + vb.height * 0.5;
