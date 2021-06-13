export function getGridGapSizes(width: number): { big: number; small: number } {
    // gapSize, which would fit 10 - 100 gaps in whole width
    let gapPowerOf10 = closestPowerOf10(width) * 0.1;

    if (width / gapPowerOf10 > 80) {
        return {
            big: gapPowerOf10 * 10,
            small: gapPowerOf10 * 2,
        };
    }
    if (width / gapPowerOf10 > 40) {
        return {
            big: gapPowerOf10 * 5,
            small: gapPowerOf10,
        };
    }
    if (width / gapPowerOf10 > 20) {
        return {
            big: gapPowerOf10,
            small: gapPowerOf10 * 0.5,
        };
    }
    return {
        big: gapPowerOf10,
        small: gapPowerOf10 * 0.1,
    };
}

export function closestPowerOf10(floatNumber: number): number {
    return Math.pow(10, Math.floor(Math.log10(floatNumber)));
}
