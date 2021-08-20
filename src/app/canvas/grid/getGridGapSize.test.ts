import { closestPowerOf10, getGridGapSizes } from './getGridGapSizes';

interface GridSizeLookkup {
    pixelsPerUnit: number;
    gapSizes: {
        small: number;
        big: number;
    };
}

describe('getGridSize', () => {
    it('closestPowerOf10', () => {
        expect(closestPowerOf10(1)).toBe(1);
        expect(closestPowerOf10(9)).toBe(1);
        expect(closestPowerOf10(100)).toBe(100);
        expect(closestPowerOf10(99)).toBe(10);
        expect(closestPowerOf10(0.25)).toBe(0.1);
        expect(closestPowerOf10(0.0011)).toBe(0.001);
        expect(closestPowerOf10(0.0099)).toBe(0.001);
    });

    it('getGridSize()', () => {
        const gridSizeLookkups: GridSizeLookkup[] = [
            { pixelsPerUnit: 0.99, gapSizes: { small: 20, big: 100 } },
            { pixelsPerUnit: 1.1, gapSizes: { small: 10, big: 50 } },
            { pixelsPerUnit: 2.99, gapSizes: { small: 10, big: 50 } },
            { pixelsPerUnit: 3.01, gapSizes: { small: 5, big: 10 } },
            { pixelsPerUnit: 5.99, gapSizes: { small: 5, big: 10 } },
            { pixelsPerUnit: 6.01, gapSizes: { small: 2, big: 10 } },
            { pixelsPerUnit: 9.99, gapSizes: { small: 2, big: 10 } },
            { pixelsPerUnit: 10.01, gapSizes: { small: 1, big: 5 } },
            { pixelsPerUnit: 100.01, gapSizes: { small: 0.1, big: 0.5 } },
        ];
        gridSizeLookkups.forEach(({ pixelsPerUnit, gapSizes }) => {
            expect(getGridGapSizes(pixelsPerUnit).big).toBeCloseTo(gapSizes.big);
            expect(getGridGapSizes(pixelsPerUnit).small).toBeCloseTo(gapSizes.small);
        });
    });
});
