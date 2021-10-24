/**
 * from: https://testing-library.com/docs/example-drag/
 * but made type safe
 */

import { fireEvent } from '@testing-library/dom';
import { Point } from '../models/Point';

// https://stackoverflow.com/a/53946549/1179377
function isElement(obj: Element | unknown): obj is Element {
    if (typeof obj !== 'object') {
        return false;
    }
    let prototypeStr, prototype;
    do {
        prototype = Object.getPrototypeOf(obj);
        // to work in iframe
        prototypeStr = Object.prototype.toString.call(prototype);
        // '[object Document]' is used to detect document
        if (prototypeStr === '[object Element]' || prototypeStr === '[object Document]') {
            return true;
        }
        obj = prototype;
        // null is the terminal of object
    } while (prototype !== null);
    return false;
}

function getElementClientCenter(element: Element) {
    const { left, top, width, height } = element.getBoundingClientRect();
    return {
        x: left + width / 2,
        y: top + height / 2,
    };
}

function getCoords(charlie: Element | Point): Point {
    return isElement(charlie) ? getElementClientCenter(charlie) : charlie;
}

const sleep = (ms: number) =>
    new Promise((resolve) => {
        setTimeout(resolve, ms);
    });

interface DragOptions {
    to?: Element | Point;
    delta?: Point;
    steps?: number;
    duration?: number;
}
export default async function drag(
    element: Element,
    { to: inTo, delta, steps = 20, duration = 500 }: DragOptions
) {
    if (!inTo && !delta) {
        throw Error('delta or inTo have to be defined');
    }
    const from = getElementClientCenter(element);
    const to = delta
        ? {
              x: from.x + delta.x,
              y: from.y + delta.y,
          }
        : getCoords(inTo!);

    const step = {
        x: (to.x - from.x) / steps,
        y: (to.y - from.y) / steps,
    };

    const current = {
        clientX: from.x,
        clientY: from.y,
    };

    fireEvent.mouseEnter(element, current);
    fireEvent.mouseOver(element, current);
    fireEvent.mouseMove(element, current);
    fireEvent.mouseDown(element, current);
    for (let i = 0; i < steps; i++) {
        current.clientX += step.x;
        current.clientY += step.y;
        await sleep(duration / steps);
        fireEvent.mouseMove(element, { ...current });
    }
    fireEvent.mouseUp(element, current);
}
