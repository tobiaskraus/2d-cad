import { lineLength } from './lineLength';

describe('geometry/lineLength', () => {
    it('should return right length', () => {
        expect(lineLength({ x: 0, y: 0 }, { x: 0, y: 1 })).toBe(1);
        expect(lineLength({ x: 0, y: 0 }, { x: -1, y: 0 })).toBe(1);

        // 3² + 4² = 5²
        expect(lineLength({ x: 3, y: 4 }, { x: 0, y: 0 })).toBe(5);
    });
});
