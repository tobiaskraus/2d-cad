import { getViewBox, ViewBox } from './ViewBox';

describe('ViewBox', () => {
    it('getViewBox()', () => {
        const expectedViewBox: ViewBox = {
            x: -40,
            y: -25,
            width: 80,
            height: 50,
            pixelsPerUnit: 10,
        };
        expect(
            getViewBox({
                pixelsPerUnit: 10,
                centerX: 0,
                centerY: 0,
                windowHeight: 500,
                windowWidth: 800,
            })
        ).toEqual(expectedViewBox);
    });
});
