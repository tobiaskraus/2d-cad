import { lineAngle } from './lineAngle';

describe('lineAngle', () => {
    it('basic angles starting from P(0,0)', () => {
        expect(lineAngle({ x: 0, y: 0 }, { x: 0, y: 1 })).toBeCloseTo(90);
        expect(lineAngle({ x: 0, y: 0 }, { x: 0, y: -1 })).toBeCloseTo(-90);
        expect(lineAngle({ x: 0, y: 0 }, { x: 1, y: 0 })).toBeCloseTo(0);
        expect(lineAngle({ x: 0, y: 0 }, { x: -1, y: 0 })).toBeCloseTo(180);
        expect(lineAngle({ x: 0, y: 0 }, { x: 1, y: 1 })).toBeCloseTo(45);
        expect(lineAngle({ x: 0, y: 0 }, { x: -1, y: -1 })).toBeCloseTo(-135);
    });

    it('angles when not starting from P(0,0)', () => {
        expect(lineAngle({ x: 10, y: 10 }, { x: 10, y: 20 })).toBeCloseTo(90);
    });

    it('should return 0 when line has no length', () => {
        expect(lineAngle({ x: 10, y: 10 }, { x: 10, y: 10 })).toBeCloseTo(0);
    });
});
