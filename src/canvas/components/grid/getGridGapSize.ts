export function getGridGapSize(width: number): number {
    let gapSize = 1;
    let scaledWidth = width;
    if (width > 20) {
        while (scaledWidth > 20) {
            gapSize *= 10;
            scaledWidth = scaledWidth / 10;
        }
    } else {
        while (scaledWidth < 2) {
            gapSize /= 10;
            scaledWidth = scaledWidth * 10;
        }
    }
    return gapSize;
}
