/**
 * returns an array with all numbers which are divisible by `sequenceStep` in a certain range.
 * E.g. `(-3.1, 5.9, 2) => [-2, 0, 2, 4]`
 */
export function findNumberSequenceInRange(
    rangeFrom: number,
    rangeTill: number,
    sequenceStep: number
): number[] {
    const result = [];
    const first = Math.floor((rangeFrom + sequenceStep) / sequenceStep) * sequenceStep;

    for (let current = first; current < rangeTill; current += sequenceStep) {
        result.push(current);
    }
    return result;
}
