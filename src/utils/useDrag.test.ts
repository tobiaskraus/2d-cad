import { renderHook } from '@testing-library/react-hooks';
import { ViewBox } from '../app/canvas/viewBox/ViewBox';
import { Point } from '../models/Point';
import drag from './drag';
import { useDrag } from './useDrag';

const viewBox: ViewBox = {
    width: 10,
    height: 10,
    x: 0,
    y: 0,
    pixelsPerUnit: 1,
};

fdescribe('useDrag', () => {
    test('drag from 0,0 to 20,30', async () => {
        let onChangeResult: Point = { x: 0, y: 0 };
        let onFinishResult: Point = { x: 0, y: 0 };
        const onChange = (p: Point) => (onChangeResult = p);
        const onFinish = (p: Point) => (onFinishResult = p);
        const { result } = renderHook(() => useDrag(viewBox, onChange, onFinish));

        // user starts dragging
        result.current.onMouseDown();

        // ... starts moving
        const dummyElement = document.body;
        await drag(dummyElement, { delta: { x: 20, y: 30 } });
        await sleep(100);

        expect(onFinishResult.x).toBeCloseTo(20);
        expect(onFinishResult.y).toBeCloseTo(30);
    });
});

const sleep = (ms: number) =>
    new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
