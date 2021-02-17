import { getGridGapSize } from './Grid';

interface GridSizeLookkup {
    viewWidth: number;
    gapSize: number;
}

test('getGridSize', () => {
    const gridSizeLookkups: GridSizeLookkup[] = [
        {
            viewWidth: 1,
            gapSize: 0.1,
        },
        {
            viewWidth: 20,
            gapSize: 1,
        },
        {
            viewWidth: 21,
            gapSize: 10,
        },
        {
            viewWidth: 100,
            gapSize: 10,
        },
    ];
    gridSizeLookkups.forEach(({ viewWidth, gapSize }) => {
        expect(getGridGapSize(viewWidth)).toBe(gapSize);
    });
});
