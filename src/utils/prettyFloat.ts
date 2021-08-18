/**
 * pretty format of floats, as they are too precise (too many characters).
 * @param viewBoxLength viewBox.height * viewBox.width
 */
export function prettyFloat(size: number, viewBoxLength: number): string {
    const log = Math.log10(viewBoxLength);
    const decimalPlace = Math.max(log * -1 + 4, 0);
    const result = size.toFixed(decimalPlace);
    return result;
}
