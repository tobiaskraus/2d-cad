import { prettyFloat } from './prettyFloat';

describe('prettyFloat', () => {
    test('viewBox length: 20.000 - 100.000 -> presision 0', () => {
        expect(prettyFloat(1, 20000)).toBe('1');
        expect(prettyFloat(1, 100000)).toBe('1');
    });
    test('viewBox length: 2.000 - 10.000 -> presision 0', () => {
        expect(prettyFloat(1, 2000)).toBe('1');
        expect(prettyFloat(1, 10000)).toBe('1');
    });
    test('viewBox length: 20 - 100 -> presision 2', () => {
        expect(prettyFloat(1, 20)).toBe('1.00');
        expect(prettyFloat(1, 100)).toBe('1.00');
    });
    test('viewBox length: 2 - 10 -> presision 3', () => {
        expect(prettyFloat(1, 2)).toBe('1.000');
        expect(prettyFloat(1, 10)).toBe('1.000');
    });
    test('viewBox length: 0.02 - 0.1 -> presision 5', () => {
        expect(prettyFloat(1, 0.02)).toBe('1.00000');
        expect(prettyFloat(1, 0.1)).toBe('1.00000');
    });
});
