import { getCoordinates } from './getCoordinates';
import { ViewBox } from './ViewBox';

const vb1: ViewBox = {
    x: 0,
    y: 0,
    width: 300,
    height: 200,
    pixelsPerUnit: 1,
};
const vb2: ViewBox = {
    x: -100,
    y: 200,
    width: 30,
    height: 20,
    pixelsPerUnit: 10,
};

describe('getCoordinates', () => {
    it('viewBox1: click on top left corner', () => {
        expect(getCoordinates(0, 0, vb1)).toEqual({ x: 0, y: 0 });
    });
    it('viewBox2: click on top left corner', () => {
        expect(getCoordinates(0, 0, vb2)).toEqual({ x: -100, y: 200 });
    });
    it('viewBox2: click on bottom right corner', () => {
        expect(getCoordinates(300, 200, vb2)).toEqual({ x: -70, y: 220 });
    });
});
