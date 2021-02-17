import { findNumberSequenceInRange } from './findNumberSequenceInRange';

test('get all integers (step: 1) in range from 1.2 till 4.7', () => {
    const integers = findNumberSequenceInRange(1.2, 4.7, 1);
    expect(integers).toEqual([2, 3, 4]);
});

test('get all even integers (step: 2) in range from -3.2 till 2.7', () => {
    const integers = findNumberSequenceInRange(-3.2, 2.7, 2);
    expect(integers).toEqual([-2, 0, 2]);
});

test('get all numbers with sequenceStep 0.3 in range from -0.7 till 1.5', () => {
    const integers = findNumberSequenceInRange(-0.7, 1.5, 0.3);
    expect(integers).toEqual([-0.6, -0.3, 0, 0.3, 0.6, 0.9, 1.2]);
});
