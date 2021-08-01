import { lineCenter } from './lineCenter';

test('lineCenter', () => {
    expect(lineCenter({ x: -2, y: -3 }, { x: 2, y: 3 })).toEqual({ x: 0, y: 0 });
    expect(lineCenter({ x: 0, y: 0 }, { x: 10, y: -4 })).toEqual({ x: 5, y: -2 });
    expect(lineCenter({ x: 4, y: 4 }, { x: -2, y: -2 })).toEqual({ x: 1, y: 1 });
});
