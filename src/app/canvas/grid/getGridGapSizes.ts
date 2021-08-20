export function getGridGapSizes(pixelsPerUnit: number): { big: number; small: number } {
    // smallest width (power of ten) which is still visible (1 - real 10px)
    let smallestUnitPowerOf10 = closestPowerOf10(10 / pixelsPerUnit);
    if (smallestUnitPowerOf10 * pixelsPerUnit < 3) {
        return {
            small: smallestUnitPowerOf10 * 10,
            big: smallestUnitPowerOf10 * 50,
        };
    }
    if (smallestUnitPowerOf10 * pixelsPerUnit < 6) {
        return {
            small: smallestUnitPowerOf10 * 5,
            big: smallestUnitPowerOf10 * 10,
        };
    }
    return {
        small: smallestUnitPowerOf10 * 2,
        big: smallestUnitPowerOf10 * 10,
    };
}

export function closestPowerOf10(floatNumber: number): number {
    return Math.pow(10, Math.floor(Math.log10(floatNumber)));
}
