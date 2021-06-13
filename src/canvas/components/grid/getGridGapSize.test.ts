import { closestPowerOf10, getGridGapSizes } from './getGridGapSizes';

interface GridSizeLookkup {
    viewWidth: number;
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
            {
                viewWidth: 1,
                gapSizes: {
                    small: 0.01,
                    big: 0.1,
                },
            },
            {
                viewWidth: 20,
                gapSizes: {
                    small: 0.1,
                    big: 1,
                },
            },
            {
                viewWidth: 21,
                gapSizes: {
                    small: 0.5,
                    big: 1,
                },
            },
            {
                viewWidth: 100,
                gapSizes: {
                    small: 1,
                    big: 10,
                },
            },
        ];
        gridSizeLookkups.forEach(({ viewWidth, gapSizes }) => {
            expect(getGridGapSizes(viewWidth).big).toBeCloseTo(gapSizes.big);
            expect(getGridGapSizes(viewWidth).small).toBeCloseTo(gapSizes.small);
        });
    });
});
