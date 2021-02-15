import React from 'react';
import { render } from '@testing-library/react';
import Canvas from './Canvas';

test('svg is created in correct DOM tree', () => {
    render(<Canvas />);
    const el = document.querySelector('#canvas');
    expect(el).not.toBeNull();
});

test('create red rect: (w200 h300 x50 y25)', () => {
    render(<Canvas />);
    const el = document.querySelector('#canvas');
    if (el === null) throw Error('could not find canvas');
    const rect = el.querySelector('rect');
    if (rect === null) throw Error('could not find rect');
    const w = rect.getAttribute('width');
    const h = rect.getAttribute('height');
    const x = rect.getAttribute('x');
    const y = rect.getAttribute('y');
    expect(w).toEqual('200');
    expect(h).toEqual('300');
    expect(x).toEqual('50');
    expect(y).toEqual('25');
});
